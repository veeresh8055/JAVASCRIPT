const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const connectToDb = require("../src/db/db");

let mongoServer;
const mockRedisStore = new Map();

jest.mock("../src/db/redis", () => ({
  get: jest.fn(async (key) => (mockRedisStore.has(key) ? mockRedisStore.get(key) : null)),
  set: jest.fn(async (key, value) => {
    mockRedisStore.set(key, value);
    return "OK";
  }),
  del: jest.fn(async (key) => {
    const existed = mockRedisStore.delete(key);
    return existed ? 1 : 0;
  }),
  flushall: jest.fn(async () => {
    mockRedisStore.clear();
    return "OK";
  }),
}));

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongoServer.getUri();
  process.env.JWT_SECRETE = process.env.JWT_SECRETE || "test-secret";
  await connectToDb();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key of Object.keys(collections)) {
    await collections[key].deleteMany({});
  }
  mockRedisStore.clear();
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});
