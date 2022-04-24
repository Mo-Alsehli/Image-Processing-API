import express from "express";
import path from "path";
import { checkFileExists } from "./functions/cache";
import { resize } from "./functions/resize";

const image = express.Router();

const imgQuery = { name: "", width: "", height: "" };

image.get("/", async (req: express.Request, res: express.Response) => {
  imgQuery.name = req.query.filename as string;
  imgQuery.width = req.query.width as string;
  imgQuery.height = req.query.height as string;

  if (
    await checkFileExists(
      `assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`
    )
  ) {
    res.sendFile(
      path.join(
        process.cwd(),
        `assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`
      )
    );
  } else {
    if (req.originalUrl === "/api/image" || req.originalUrl === "/api/image/") {
      res.send("IMAGE API");
    } else {
      const resized = `path.join(process.cwd(), assets/${imgQuery.name}.jpg`;
      const filename = `assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`;
      const imgPath = ` process.cwd(), assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`;

      resize(resized, filename, imgQuery.width, imgQuery.height);
      res.sendFile(imgPath);
    }
  }
});

export default image;
