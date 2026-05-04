import path from "path";
import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";
import { createRenderJob } from "./renderFoundation";
import {
  buildInitialStatus,
  buildOutputPath,
  copyAssetIntoJob,
  createJobFolders,
  initializeLocalStorage,
  markJobFailure,
  markJobStatus,
  publicDownloadName,
  updateJobStatus,
  writeJobRequest,
  writeJobStatus,
  type JobStatusRecord,
} from "./localJobStore";
import type { ExplainerVideoRequest } from "./renderContract";

type QueueItem = {
  jobId: string;
  request: ExplainerVideoRequest;
};

const queue: QueueItem[] = [];
let active = false;

const runNext = async () => {
  if (active || queue.length === 0) {
    return;
  }

  active = true;
  const item = queue.shift();

  if (!item) {
    active = false;
    return;
  }

  try {
    await markJobStatus(item.jobId, "validating");
    await markJobStatus(item.jobId, "bundling");

    const outputPath = buildOutputPath(
      item.jobId,
      publicDownloadName(item.request.outputFileName),
    );
    const serveUrl = await bundle({
      entryPoint: path.join(process.cwd(), "src", "index.ts"),
      onProgress: () => undefined,
      webpackOverride: (config) => config,
    });
    const inputProps = { request: item.request, sceneDurations: [] };
    const compositions = await getCompositions(serveUrl, {
      inputProps,
      chromiumOptions: {
        disableWebSecurity: true,
      },
    });
    const composition = compositions.find(
      (candidate) => candidate.id === item.request.compositionId,
    );

    if (!composition) {
      throw new Error(`Composition not found: ${item.request.compositionId}`);
    }

    await updateJobStatus(item.jobId, {
      status: "rendering",
      outputPath,
    });
    await renderMedia({
      composition,
      serveUrl,
      codec: "h264",
      outputLocation: outputPath,
      inputProps,
      onProgress: () => undefined,
    });

    await updateJobStatus(item.jobId, {
      status: "completed",
      outputPath,
    });
  } catch (error) {
    await markJobFailure(item.jobId, error);
  } finally {
    active = false;
    void runNext();
  }
};

export const createAndQueueRenderJob = async (input: ExplainerVideoRequest) => {
  await initializeLocalStorage();
  const { job } = createRenderJob(input);
  await createJobFolders(job.id);

  const requestWithJobAssets: ExplainerVideoRequest = {
    ...input,
    masterAudioFile: await copyAssetIntoJob(job.id, input.masterAudioFile, "audio"),
    branding: {
      ...input.branding,
      logoPath: await copyAssetIntoJob(job.id, input.branding.logoPath, "logo"),
    },
  };

  const requestPath = await writeJobRequest(job.id, requestWithJobAssets);
  const status: JobStatusRecord = buildInitialStatus(job, requestPath);
  await writeJobStatus(job.id, status);

  queue.push({ jobId: job.id, request: requestWithJobAssets });
  void runNext();

  return { jobId: job.id, request: requestWithJobAssets };
};
