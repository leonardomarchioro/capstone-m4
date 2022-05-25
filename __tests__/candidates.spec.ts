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
import { CandidatesRequests } from "./utils/candidatesRequests";
import { response } from "express";

const candidateReq = new CandidatesRequests(app);

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

describe("Candidate routes", () => {
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
      it("Should create a candidate for a job", async () => {
        const { response } = await candidateReq.createCandidate(
          userData,
          supplierData
        );

        const { status, body } = response;
        expect(status).toBe(201);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("Candidate");
      });
    });

    describe("GET", () => {
      it("Should list all my applications", async () => {
        const { response } = await candidateReq.listAllApplication(
          userData,
          supplierData
        );
        const { status, body } = response;

        expect(status).toBe(200);
        expect(body).toBeDefined();
        expect(body).toHaveProperty("candidacys");
      });
    });
  });

  describe("GET", () => {
    it("Should list all the candidates", async () => {
      const { response } = await candidateReq.listAllCandidates(
        userData,
        supplierData
      );

      const { status, body } = response;
      expect(status).toBe(200);
      expect(body).toBeDefined();
      expect(body).toHaveProperty("Candidates");
    });
  });

  describe("DELETE", () => {
    it("Should delete a candidate", async () => {
      const { response } = await candidateReq.deleteCandidate(
        userData,
        supplierData
      );

      const { status, body } = response;
      expect(status).toBe(200);
      expect(body).toBeDefined();
      expect(body).toHaveProperty("message");
    });
  });
});
