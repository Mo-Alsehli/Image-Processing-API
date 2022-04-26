import sharp from "sharp";

export async function resize(
  resized: string,
  filename: string,
  width: number,
  height: number
) {
  return await sharp(resized)
    .resize(width, height)
    .toFile(filename);
}
