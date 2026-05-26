const request = require("supertest");
const app = require("../src/app");
const User = require("../src/model/user.model");

describe("POST /auth/register", () => {
  it("registers a user successfully", async () => {
    const payload = {
      username: "john_doe",
      email: "john@example.com",
      password: "Password@123",
      fullName: {
        firstName: "John",
        lastName: "Doe",
      },
    };

    const response = await request(app).post("/auth/register").send(payload);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
    expect(response.body.user.email).toBe(payload.email);

    const userInDb = await User.findOne({ email: payload.email });
    expect(userInDb).not.toBeNull();
    expect(userInDb.password).not.toBe(payload.password);
  });

  it("rejects duplicate registration by email", async () => {
    const payload = {
      username: "john_doe",
      email: "john@example.com",
      password: "Password@123",
      fullName: {
        firstName: "John",
        lastName: "Doe",
      },
    };

    await request(app).post("/auth/register").send(payload);
    const response = await request(app).post("/auth/register").send(payload);

    expect(response.status).toBe(409);
    expect(response.body.message).toBe("User already exists");
  });
});
