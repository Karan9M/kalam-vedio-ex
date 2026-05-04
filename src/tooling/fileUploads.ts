import { promises as fs } from "fs";
import path from "path";
import { PUBLIC_UPLOADS_DIR, initializeLocalStorage, safeName } from "./localJobStore";

const uniqueSuffix = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const saveUploadedFile = async (
  kind: "audio" | "script" | "logo",
  originalName: string,
  buffer: Buffer,
) => {
  await initializeLocalStorage();
  const extension = path.extname(originalName) || (kind === "script" ? ".txt" : "");
  const fileName = `${safeName(path.basename(originalName, extension))}-${uniqueSuffix()}${extension}`;
  const directory = path.join(PUBLIC_UPLOADS_DIR, kind);
  await fs.mkdir(directory, { recursive: true });
  const absolutePath = path.join(directory, fileName);
  await fs.writeFile(absolutePath, buffer);

  return {
    fileName,
    absolutePath,
    publicPath: path.posix.join("local-tool", "uploads", kind, fileName),
  };
};

export const readUploadedText = async (publicPath: string) => {
  const absolutePath = path.join(process.cwd(), "public", publicPath);
  return fs.readFile(absolutePath, "utf8");
};
