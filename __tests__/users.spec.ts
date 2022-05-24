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
        const { response, token } = await userRequests.signIn(userData);
        const { status, body } = response;
        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("token");
      });
    });

    describe("GET", () => {
      it("Should list my profile", async () => {
        const { response, token } = await userRequests.listProfile(userData);
        const { status, body } = response;

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("user");
      });
    });
    describe("PATCH", () => {
      it("Should update user role", async () => {
        const { response, token } = await userRequests.updateRole(userData);
        const { status, body } = response;

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("message");
        expect(body.message).toBe("Role updated!");
      });
    });
    describe("GET", () => {
      it("Should list all Suppliers", async () => {
        const { response, token } = await userRequests.listAllSuppliers(
          userData
        );
        const { status, body } = response;

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveLength(1);
      });
    });

    describe("PATCH", () => {
      it("Should update profile", async () => {
        const { response, token } = await userRequests.updateProfile(userData);
        const { status, body } = response;

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("updatedUser");
        expect(body.updatedUser.name).toBe("João");
      });
    });
    describe("PATCH", () => {
      it("Should update password", async () => {
        const { response, token } = await userRequests.updatePassword(userData);
        const { status, body } = response;

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("message");
        expect(body.message).toBe("Password updated!");
      });
    });
    describe("DELETE", () => {
      it("Should delete user", async () => {
        const { response, token } = await userRequests.deleteUser(userData);
        const { status, body } = response;

        expect(status).toBe(204);
        expect(body).toBeDefined();
      });
    });
  });
});
