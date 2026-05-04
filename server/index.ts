import express from "express";
import multer from "multer";
import path from "path";
import { execFile } from "child_process";
import { saveUploadedFile, readUploadedText } from "../src/tooling/fileUploads";
import { buildExplainerRequest } from "../src/tooling/requestMapper";
import { createAndQueueRenderJob } from "../src/tooling/localRenderRunner";
import {
  initializeLocalStorage,
  listJobStatuses,
  PROJECT_ROOT,
  publicDownloadName,
  readJobStatus,
} from "../src/tooling/localJobStore";
import { getTemplateDefinition, TEMPLATE_REGISTRY } from "../src/tooling/templateRegistry";

const app = express();
const upload = multer();
const port = Number(process.env.TOOL_PORT ?? 3210);

app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(PROJECT_ROOT, "app")));

app.get("/api/templates", (_req, res) => {
  res.json({ templates: TEMPLATE_REGISTRY });
});

app.post("/api/uploads/:kind", upload.single("file"), async (req, res) => {
  try {
    const kind = req.params.kind;
    if (!req.file || (kind !== "audio" && kind !== "script" && kind !== "logo")) {
      res.status(400).json({ error: "Invalid upload request" });
      return;
    }

    const saved = await saveUploadedFile(kind, req.file.originalname, req.file.buffer);
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.post("/api/render-jobs", async (req, res) => {
  try {
    const {
      topic,
      templateId,
      outputFileName,
      brandName,
      introSubtitle,
      outroSubtitle,
      logoPath,
      audioPath,
      scriptPath,
      scriptText,
      themePreset,
    } = req.body as Record<string, string>;

    const template = getTemplateDefinition(templateId);
    if (!template) {
      res.status(400).json({ error: "Unknown template" });
      return;
    }

    const resolvedScript = scriptText?.trim()
      ? scriptText
      : scriptPath
        ? await readUploadedText(scriptPath)
        : "";

    if (!audioPath || !logoPath || !resolvedScript || !topic) {
      res.status(400).json({ error: "Missing required render inputs" });
      return;
    }

    const request = buildExplainerRequest({
      topic,
      templateId,
      compositionId: template.compositionId,
      outputFileName: outputFileName || topic,
      brandName: brandName || "SuperKalam",
      introSubtitle: introSubtitle || `${topic} — Generated Explainer`,
      outroSubtitle: outroSubtitle || "Rendered locally with SuperKalam",
      logoPath,
      masterAudioFile: audioPath,
      scriptText: resolvedScript,
      themePreset: themePreset || "default",
    });

    const result = await createAndQueueRenderJob(request);
    const status = await readJobStatus(result.jobId);
    res.status(201).json({ job: status });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get("/api/render-jobs", async (_req, res) => {
  try {
    const jobs = await listJobStatuses();
    res.json({ jobs });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
});

app.get("/api/render-jobs/:id", async (req, res) => {
  try {
    const job = await readJobStatus(req.params.id);
    res.json({ job });
  } catch {
    res.status(404).json({ error: "Job not found" });
  }
});

app.get("/api/render-jobs/:id/output", async (req, res) => {
  try {
    const job = await readJobStatus(req.params.id);
    if (!job.outputPath) {
      res.status(404).json({ error: "Output not ready" });
      return;
    }

    res.download(job.outputPath, publicDownloadName(job.outputFileName));
  } catch {
    res.status(404).json({ error: "Output not found" });
  }
});

app.post("/api/render-jobs/:id/reveal", async (req, res) => {
  try {
    const job = await readJobStatus(req.params.id);
    if (!job.outputPath) {
      res.status(404).json({ error: "Output not ready" });
      return;
    }

    if (process.platform === "win32") {
      execFile("explorer.exe", ["/select,", job.outputPath]);
    }

    res.json({ ok: true });
  } catch {
    res.status(404).json({ error: "Job not found" });
  }
});

app.use((_req, res) => {
  res.sendFile(path.join(PROJECT_ROOT, "app", "index.html"));
});

initializeLocalStorage()
  .then(() => {
    app.listen(port, () => {
      console.log(`Local render tool running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize local render tool", error);
    process.exit(1);
  });
