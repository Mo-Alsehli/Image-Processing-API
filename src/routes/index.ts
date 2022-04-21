import express from "express";
import image from "./images/image";

const routes = express.Router();
const paramObj = { fielName: "Mohamed", width: "200", height: "200" };
const searchParams = new URLSearchParams(paramObj);
searchParams.toString();

routes.get("/", (req, res) => {
  res.send("api");
});

routes.use("/image", image);

export default routes;
