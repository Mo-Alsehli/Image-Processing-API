import { access } from "fs/promises";
import { constants } from "fs";

export async function checkFilename(filename: string) {
  try {
    await access(`assets/${filename}.jpg`, constants.F_OK);
    return false;
  } catch {
    return true;
  }
}
