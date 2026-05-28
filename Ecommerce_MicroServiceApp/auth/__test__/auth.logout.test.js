const request = require("supertest");
const bcrypt = require("bcryptjs");
const app = require("../src/app");
const User = require("../src/model/user.model");
const redis = require("../src/db/redis");

describe("POST /api/auth/logout", () => {
  it("logs out successfully and blacklists token", async () => {
    const plainPassword = "Password@123";
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await User.create({
      username: "logout_user",
      email: "logout@example.com",
      password: hashedPassword,
      fullName: {
        firstName: "Log",
        lastName: "Out",
      },
    });

    const loginResponse = await request(app).post("/api/auth/login").send({
      email: "logout@example.com",
      password: plainPassword,
    });

    const cookie = loginResponse.headers["set-cookie"][0];
    const token = cookie.split(";")[0].split("=")[1];

    const response = await request(app).post("/api/auth/logout").set("Cookie", [cookie]);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Logout successful");

    const blacklisted = await redis.get(`blacklist:${token}`);
    expect(blacklisted).toBe("1");
  });

  it("returns 401 when token cookie is missing", async () => {
    const response = await request(app).post("/api/auth/logout");

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Unauthorized");
  });

  it("blocks access to /me after logout using the same token", async () => {
    const plainPassword = "Password@123";
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await User.create({
      username: "logout_me_user",
      email: "logoutme@example.com",
      password: hashedPassword,
      fullName: {
        firstName: "Log",
        lastName: "Me",
      },
    });

    const loginResponse = await request(app).post("/api/auth/login").send({
      email: "logoutme@example.com",
      password: plainPassword,
    });

    const cookie = loginResponse.headers["set-cookie"][0];

    await request(app).post("/api/auth/logout").set("Cookie", [cookie]);

    const meResponse = await request(app).get("/api/auth/me").set("Cookie", [cookie]);

    expect(meResponse.status).toBe(401);
    expect(meResponse.body.message).toBe("Unauthorized");
  });
});
