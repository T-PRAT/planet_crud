import request from "supertest";
import { app } from "../../src/index";

describe("logout route", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/auth/logout");
    expect(response.status).toBe(200);
  });
});

describe("get Users", () => {
  it("should return a list of users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
