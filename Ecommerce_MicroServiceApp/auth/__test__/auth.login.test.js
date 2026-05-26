const request = require("supertest");
const bcrypt = require("bcryptjs");
const app = require("../src/app");
const User = require("../src/model/user.model");

describe("POST /api/auth/login", () => {
  it("logs in successfully with valid credentials", async () => {
    const plainPassword = "Password@123";
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await User.create({
      username: "john_doe",
      email: "john@example.com",
      password: hashedPassword,
      fullName: {
        firstName: "John",
        lastName: "Doe",
      },
    });

    const response = await request(app).post("/api/auth/login").send({
      email: "john@example.com",
      password: plainPassword,
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Login successful");
    expect(response.body.user.email).toBe("john@example.com");
  });

  it("rejects login with wrong password", async () => {
    const hashedPassword = await bcrypt.hash("Password@123", 10);

    await User.create({
      username: "john_doe",
      email: "john@example.com",
      password: hashedPassword,
      fullName: {
        firstName: "John",
        lastName: "Doe",
      },
    });

    const response = await request(app).post("/api/auth/login").send({
      email: "john@example.com",
      password: "WrongPassword@123",
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid credentials");
  });
});
