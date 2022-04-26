import express from "express";
import path from "path";
import { checkFileExists } from "./functions/cache";
import { resize } from "./functions/resize";
import { checkFilename } from "./functions/checkFilename";

const image = express.Router();

const imgQuery = { name: "", width: "", height: "" };

image.get("/", async (req: express.Request, res: express.Response) => {
  imgQuery.name = req.query.filename as string;
  imgQuery.width = req.query.width as string;
  imgQuery.height = req.query.height as string;

  if (req.originalUrl === "/api/image" || req.originalUrl === "/api/image/") {
    return res.send("IMAGE API");
  } else if (
    await checkFileExists(
      `assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`
    )
  ) {
    return res.sendFile(
      path.join(
        process.cwd(),
        `assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`
      )
    );
  } else if (await checkFilename(imgQuery.name)) {
    return res.send("This Image Name Doesn't Exist!");
  } else {
    const resized = path.join(process.cwd(), `assets/${imgQuery.name}.jpg`);
    const filename = `assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`;
    await resize(
      resized,
      filename,
      parseInt(imgQuery.width),
      parseInt(imgQuery.height)
    );

    return res.sendFile(path.join(process.cwd(), filename));
  }
});

export default image;
