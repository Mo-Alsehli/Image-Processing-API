"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_1 = __importDefault(require("./images/image"));
var routes = express_1.default.Router();
var paramObj = { fielName: "Mohamed", width: "200", height: "200" };
var searchParams = new URLSearchParams(paramObj);
searchParams.toString();
routes.get("/", function (req, res) {
    res.send("api");
});
routes.use("/image", image_1.default);
exports.default = routes;
