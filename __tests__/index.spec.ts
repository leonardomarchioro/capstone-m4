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
import { JobRequests } from "./utils/jobRequests";

const userRequests = new UserRequests(app);
const candidateReq = new CandidatesRequests(app);
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

describe("User routes", () => {
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


describe("Candidate routes", () => {

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


describe("Job routes", () => {
  describe("POST", () => {
    it("Should create new job", async () => {
      const { response } = await jobRequests.createJob(userData);
      const { status, body } = response;
      expect(status).toBe(201);
      expect(body).toBeDefined();
      expect(body).toHaveProperty("Job");
    });
  });
  describe("GET", () => {
    it("Should list my jobs", async () => {
      const { response } = await jobRequests.listMyJobs(userData);
      const { status, body } = response;

      expect(status).toBe(200);
      expect(body).toBeDefined();
      expect(body).toHaveProperty("Jobs");
    });
  });
  describe("GET", () => {
    it("Should list all jobs is available", async () => {
      const { response } = await jobRequests.listAllJobsAvailable(
        userData,
        supplierData
      );
      const { status, body } = response;

      expect(status).toBe(200);
      expect(body).toBeDefined();
      expect(body).toHaveLength(1);
    });
  });
  describe("GET", () => {
    it("Should list one jobs", async () => {
      const { response } = await jobRequests.listOneJob(userData);
      const { status, body } = response;

      expect(status).toBe(200);
      expect(body).toBeDefined();
      expect(body).toHaveProperty("job.id");
    });
  });
  describe("PATCH", () => {
    it("Should update infos jobs", async () => {
      const { response } = await jobRequests.updateInfosJob(userData);
      const { status, body } = response;

      expect(status).toBe(200);
      expect(body).toBeDefined();
      expect(body).toHaveProperty("Job.id");
      expect(body.Job.title).toBe("Teste Update");
    });
  });
  ///////////////
  ////////// Necessário os requests de Candidatos para implementar
  ////
  describe("PATCH", () => {
    it("Should select one candidate", async () => {});
  });
  describe("PATCH", () => {
    it("Should remove candidate", async () => {});
  });
  describe("PATCH", () => {
    it("Should finish job", async () => {});
  });
  ////
  ////////
  ////////////
  describe("DELETE", () => {
    it("Should select one candidate", async () => {
      const { response } = await jobRequests.deleteJob(userData);
      const { status, body } = response;

      expect(status).toBe(204);
      expect(body).toBeDefined();
    });
  });
});
