import { promises as fs } from "fs";
import path from "path";
import type { ExplainerVideoRequest } from "./renderContract";
import type { RenderJob, RenderJobStatus } from "./renderFoundation";

export const PROJECT_ROOT = process.cwd();
export const LOCAL_DATA_DIR = path.join(PROJECT_ROOT, "local-data");
export const LOCAL_JOBS_DIR = path.join(LOCAL_DATA_DIR, "jobs");
export const PUBLIC_TOOL_DIR = path.join(PROJECT_ROOT, "public", "local-tool");
export const PUBLIC_UPLOADS_DIR = path.join(PUBLIC_TOOL_DIR, "uploads");
export const PUBLIC_JOB_ASSETS_DIR = path.join(PUBLIC_TOOL_DIR, "jobs");

export type JobStatusRecord = RenderJob & {
  updatedAt: string;
  requestPath: string;
  outputPath?: string;
  error?: string;
};

const ensureDir = async (targetPath: string) => {
  await fs.mkdir(targetPath, { recursive: true });
};

export const safeName = (value: string) => {
  return value.toLowerCase().replace(/[^a-z0-9.-]+/g, "-").replace(/^-+|-+$/g, "");
};

export const getJobDir = (jobId: string) => path.join(LOCAL_JOBS_DIR, jobId);
export const getJobAssetsDir = (jobId: string) => path.join(getJobDir(jobId), "assets");
export const getJobOutputDir = (jobId: string) => path.join(getJobDir(jobId), "output");
export const getJobStatusPath = (jobId: string) => path.join(getJobDir(jobId), "status.json");
export const getJobRequestPath = (jobId: string) => path.join(getJobDir(jobId), "request.json");
export const getPublicJobAssetsDir = (jobId: string) => path.join(PUBLIC_JOB_ASSETS_DIR, jobId, "assets");

export const initializeLocalStorage = async () => {
  await Promise.all([
    ensureDir(LOCAL_JOBS_DIR),
    ensureDir(PUBLIC_UPLOADS_DIR),
    ensureDir(PUBLIC_JOB_ASSETS_DIR),
  ]);
};

export const createJobFolders = async (jobId: string) => {
  await Promise.all([
    ensureDir(getJobDir(jobId)),
    ensureDir(getJobAssetsDir(jobId)),
    ensureDir(getJobOutputDir(jobId)),
    ensureDir(getPublicJobAssetsDir(jobId)),
  ]);
};

export const writeJobRequest = async (jobId: string, request: ExplainerVideoRequest) => {
  const requestPath = getJobRequestPath(jobId);
  await fs.writeFile(requestPath, JSON.stringify(request, null, 2), "utf8");
  return requestPath;
};

export const writeJobStatus = async (jobId: string, status: JobStatusRecord) => {
  await fs.writeFile(getJobStatusPath(jobId), JSON.stringify(status, null, 2), "utf8");
};

export const updateJobStatus = async (
  jobId: string,
  patch: Partial<JobStatusRecord>,
) => {
  const current = await readJobStatus(jobId);
  const next: JobStatusRecord = {
    ...current,
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  await writeJobStatus(jobId, next);
  return next;
};

export const readJobStatus = async (jobId: string): Promise<JobStatusRecord> => {
  const raw = await fs.readFile(getJobStatusPath(jobId), "utf8");
  return JSON.parse(raw) as JobStatusRecord;
};

export const listJobStatuses = async (): Promise<JobStatusRecord[]> => {
  await initializeLocalStorage();
  const entries = await fs.readdir(LOCAL_JOBS_DIR, { withFileTypes: true });
  const jobs = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        try {
          return await readJobStatus(entry.name);
        } catch {
          return null;
        }
      }),
  );

  return jobs
    .filter((job): job is JobStatusRecord => job !== null)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
};

export const copyAssetIntoJob = async (
  jobId: string,
  sourcePublicRelativePath: string,
  preferredName: string,
) => {
  const sourceAbsolute = path.join(PROJECT_ROOT, "public", sourcePublicRelativePath);
  const targetFileName = `${safeName(preferredName)}${path.extname(sourceAbsolute)}`;
  const targetAbsolute = path.join(getPublicJobAssetsDir(jobId), targetFileName);
  await fs.copyFile(sourceAbsolute, targetAbsolute);
  return path.posix.join("local-tool", "jobs", jobId, "assets", targetFileName);
};

export const buildInitialStatus = (
  job: RenderJob,
  requestPath: string,
): JobStatusRecord => ({
  ...job,
  requestPath,
  updatedAt: new Date().toISOString(),
});

export const buildOutputPath = (jobId: string, outputFileName: string) => {
  return path.join(getJobOutputDir(jobId), outputFileName);
};

export const publicDownloadName = (outputFileName: string) => {
  return outputFileName.endsWith(".mp4") ? outputFileName : `${outputFileName}.mp4`;
};

export const markJobFailure = async (jobId: string, error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  return updateJobStatus(jobId, { status: "failed", error: message });
};

export const markJobStatus = async (jobId: string, status: RenderJobStatus) => {
  return updateJobStatus(jobId, { status });
};
