import express from "express";
import sharp from "sharp";
import path from "path";
import { promises as fs } from "fs";

const image = express.Router();

const imgQuery = { name: "", width: "", height: "" };

image.get("/", async (req: express.Request, res: express.Response, next) => {
  imgQuery.name = req.query.filename as string;
  imgQuery.width = req.query.width as string;
  imgQuery.height = req.query.height as string;

  if (req.originalUrl === "/api/image" || req.originalUrl === "/api/image/") {
    res.send("Imgae");
  } else {
    /* fs.appendFile(
      path.join(process.cwd(), "assets/paths.json"),
      `${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`
    );
    const existPath = fs.readFile(
      path.join(process.cwd(), `assets/paths.json`)
    );

    existPath.then(data => {
      console.log(data.toString());
    }); */

    await sharp(path.join(process.cwd(), `assets/${imgQuery.name}.jpg`))
      .resize(parseInt(imgQuery.width), parseInt(imgQuery.height))
      .toFile(
        `assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`
      );
    res.sendFile(
      path.join(
        process.cwd(),
        `assets/thumbs/${imgQuery.name}_${imgQuery.width}_${imgQuery.height}.png`
      )
    );
  }
});

export default image;
