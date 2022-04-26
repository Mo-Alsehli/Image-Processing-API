import { resize } from "../routes/images/functions/resize";

describe("Test Resize Function", () => {
  it("Expect Object Of Vaild Data Of Sharp Module", () => {
    const result = (): object =>
      resize("encenadaport_470_400.png", "", 470, 400).then();
    expect(result).toBeDefined();
  });
});
