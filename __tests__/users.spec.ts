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

const userRequests = new UserRequests(app);

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

describe("User routes", () => {
  const userData = {
    name: "joao",
    email: "joao@email.com",
    password: "123456",
    phone: "1234457689",
  };

  describe("Happy end", () => {
    describe("POST", () => {
      it("Should create a user", async () => {
        const { status, body } = await userRequests.signUp(userData);

        expect(status).toBe(201);
        expect(body).toBeDefined();
        expect(body).not.toHaveProperty("password");
      });
    });

    describe("LOGIN", () => {
      it("Should login", async () => {
        const { status, body } = await userRequests.signIn(userData);
        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("token");
      });
    });

    describe("GET", () => {
      it("Should list my data", async () => {
        const { status, body } = await userRequests.listProfile(userData);

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("user");
      });
    });
    describe("PATCH", () => {
      it("Should update user role", async () => {
        const { status, body } = await userRequests.updateRole(userData);

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("message");
      });
    });
    describe("GET", () => {
      it("Should list all Suppliers", async () => {
        const { status, body } = await userRequests.listAllSuppliers(userData);

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveLength(1);
      });
    });

    describe("PATCH", () => {
      it("Should update profile", async () => {
        const { status, body } = await userRequests.updateProfile(userData);

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("updatedUser");
      });
    });
    describe("DELETE", () => {});
  });
});
