import sharp from "sharp";
import path from "path";

export async function resize(
  resized: string,
  filename: string,
  width: string,
  height: string
) {
  await sharp(path.join(resized))
    .resize(parseInt(width), parseInt(height))
    .toFile(filename);
}
