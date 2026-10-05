const request = require("supertest");
const app = require("./app");

describe("Application", () => {
  test("GET / returns the expected message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello from DevOps CI/CD Pipeline!");
  });

  test("GET /health returns OK", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "OK" });
  });
});
