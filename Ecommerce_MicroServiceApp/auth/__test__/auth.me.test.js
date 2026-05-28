const request = require("supertest");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = require("../src/app");
const User = require("../src/model/user.model");

describe("GET /api/auth/me", () => {
  it("returns current user profile for a valid token", async () => {
    const hashedPassword = await bcrypt.hash("Password@123", 10);
    const user = await User.create({
      username: "jane_doe",
      email: "jane@example.com",
      password: hashedPassword,
      fullName: {
        firstName: "Jane",
        lastName: "Doe",
      },
    });

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRETE,
      { expiresIn: "1d" }
    );

    const response = await request(app)
      .get("/api/auth/me")
      .set("Cookie", [`token=${token}`]);

    expect(response.status).toBe(200);
    expect(response.body.user).toBeDefined();
    expect(response.body.user.email).toBe("jane@example.com");
    expect(response.body.user.password).toBeUndefined();
  });

  it("returns 401 when token cookie is missing", async () => {
    const response = await request(app).get("/api/auth/me");

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Unauthorized");
  });

  it("returns 401 for an invalid token", async () => {
    const response = await request(app)
      .get("/api/auth/me")
      .set("Cookie", ["token=invalid.token.value"]);

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Unauthorized");
  });
});
