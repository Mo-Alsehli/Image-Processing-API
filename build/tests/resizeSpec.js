"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resize_1 = require("../routes/images/functions/resize");
describe("Test Resize Function", function () {
    it("Expect Object Of Vaild Data Of Sharp Module", function () {
        var result = function () {
            return (0, resize_1.resize)("encenadaport_470_400.png", "", 470, 400).then();
        };
        expect(result).toBeDefined();
    });
});
