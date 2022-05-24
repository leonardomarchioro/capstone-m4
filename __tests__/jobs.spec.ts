import { UserRequests } from "./utils/userRequests";
import { app } from "../src/app";
import {
  describe,
  beforeEach,
  expect,
  it,
  beforeAll,
  afterAll,
} from "@jest/globals";
import { prisma } from "../src/prisma/client";
import { clearDatabase } from "./utils/clearDatabase";
import { JobRequests } from "./utils/jobRequests";

const userRequests = new UserRequests(app);
const jobRequests = new JobRequests(app);

beforeAll(async () => {
  await prisma.$connect();
  await clearDatabase();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await clearDatabase();
  await prisma.$disconnect();
});

describe("Job routes", () => {
  const userData = {
    name: "joao",
    email: "joao@email.com",
    password: "123456",
    phone: "1234457689",
  };
  const supplierData = {
    name: "pedro",
    email: "pedro@email.com",
    password: "123456",
    phone: "1234457689",
  };

  describe("Happy end", () => {
    describe("POST", () => {
      it("Should create new job", async () => {
        const { status, body } = await jobRequests.createJob(userData);

        expect(status).toBe(201);
        expect(body).toBeDefined();
        expect(body).not.toHaveProperty("id");
      });
    });
    describe("GET", () => {});
    describe("PATCH", () => {});
    describe("DELETE", () => {});
  });
});
