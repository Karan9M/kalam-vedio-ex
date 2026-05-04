import { validateExplainerRequest, type ExplainerVideoRequest } from "./renderContract";
import { getTemplateDefinition } from "./templateRegistry";

export type RenderJobStatus =
  | "queued"
  | "validating"
  | "bundling"
  | "rendering"
  | "uploading"
  | "completed"
  | "failed";

export type RenderJob = {
  id: string;
  templateId: string;
  compositionId: string;
  status: RenderJobStatus;
  outputFileName: string;
  createdAt: string;
  outputPath?: string;
  error?: string;
};

export const createRenderJob = (input: unknown): {
  request: ExplainerVideoRequest;
  job: RenderJob;
} => {
  const request = validateExplainerRequest(input);
  const template = getTemplateDefinition(request.templateId);

  if (!template) {
    throw new Error(`Unknown template: ${request.templateId}`);
  }

  return {
    request,
    job: {
      id: `job-${Date.now()}`,
      templateId: request.templateId,
      compositionId: template.compositionId,
      status: "queued",
      outputFileName: `${request.outputFileName}.mp4`,
      createdAt: new Date().toISOString(),
    },
  };
};
