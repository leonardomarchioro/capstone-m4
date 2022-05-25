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
import { CategoriesRequests } from "./utils/categoriesRequests";

const categoriesRequests = new CategoriesRequests(app);

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

describe("Categories routes", () => {
  const userData = {
    name: "joao",
    email: "joao@email.com",
    password: "123456",
    phone: "1234457689",
  };

  describe("Happy end", () => {
    describe("GET", () => {
      it("Should list all categories", async () => {
        const { status, body } = await categoriesRequests.listAllCategories(
          userData
        );

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body[0]).toHaveProperty("id");
      });
    });
  });
});
