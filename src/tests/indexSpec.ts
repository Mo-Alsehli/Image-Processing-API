import supertest from "supertest";
import app from "../index";

describe("Testing The Endpoint Of The Main API", () => {
  it("returns 200", () => {
    supertest(app)
      .get("/api")
      .expect(200);
  });
});
