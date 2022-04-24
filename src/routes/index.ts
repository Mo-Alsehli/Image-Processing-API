import express from "express";
import image from "./images/image";

const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response) => {
  return res.send("api");
});

routes.use("/image", image);

export default routes;
