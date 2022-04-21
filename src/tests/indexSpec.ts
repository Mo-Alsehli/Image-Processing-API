import supertest from "supertest";
import app from "../index";

describe("Testing The Endpoint Of The API", () => {
  it("returns 200", () => {
    supertest(app)
      .get("/api/image")
      .expect(200);
  });
});
