import sharp from "sharp";
import path from "path";
import { Response } from "express";

export async function resize(
  resized: string,
  filename: string,
  width: string,
  height: string,
  res: Response
) {
  await sharp(resized)
    .resize(parseInt(width), parseInt(height))
    .toFile(filename);

  return res.sendFile(path.join(process.cwd(), filename));
}
