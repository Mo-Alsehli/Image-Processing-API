import { access } from "fs/promises";
import { constants } from "fs";

export async function checkFileExists(path: string) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
