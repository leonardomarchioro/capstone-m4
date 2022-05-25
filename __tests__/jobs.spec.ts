// import { UserRequests } from "./utils/userRequests";
// import { app } from "../src/app";
// import {
//   describe,
//   beforeEach,
//   expect,
//   it,
//   beforeAll,
//   afterAll,
// } from "@jest/globals";
// import { prisma } from "../src/prisma/client";
// import { clearDatabase } from "./utils/clearDatabase";
// import { JobRequests } from "./utils/jobRequests";

// const userRequests = new UserRequests(app);
// const jobRequests = new JobRequests(app);

// beforeAll(async () => {
//   await prisma.$connect();
//   await clearDatabase();
// });

// beforeEach(async () => {
//   await clearDatabase();
// });

// afterAll(async () => {
//   await clearDatabase();
//   await prisma.$disconnect();
// });

// describe("Job routes", () => {
//   const userData = {
//     name: "joao",
//     email: "joao@email.com",
//     password: "123456",
//     phone: "1234457689",
//   };
//   const supplierData = {
//     name: "pedro",
//     email: "pedro@email.com",
//     password: "123456",
//     phone: "1234457689",
//   };

//   describe("Happy end", () => {
//     describe("POST", () => {
//       it("Should create new job", async () => {
//         const { response } = await jobRequests.createJob(userData);
//         const { status, body } = response;
//         expect(status).toBe(201);
//         expect(body).toBeDefined();
//         expect(body).toHaveProperty("Job");
//       });
//     });
//     describe("GET", () => {
//       it("Should list my jobs", async () => {
//         const { response } = await jobRequests.listMyJobs(userData);
//         const { status, body } = response;

//         expect(status).toBe(200);
//         expect(body).toBeDefined();
//         expect(body).toHaveProperty("Jobs");
//       });
//     });
//     describe("GET", () => {
//       it("Should list all jobs is available", async () => {
//         const { response } = await jobRequests.listAllJobsAvailable(
//           userData,
//           supplierData
//         );
//         const { status, body } = response;

//         expect(status).toBe(200);
//         expect(body).toBeDefined();
//         expect(body).toHaveLength(1);
//       });
//     });
//     describe("GET", () => {
//       it("Should list one jobs", async () => {
//         const { response } = await jobRequests.listOneJob(userData);
//         const { status, body } = response;

//         expect(status).toBe(200);
//         expect(body).toBeDefined();
//         expect(body).toHaveProperty("job.id");
//       });
//     });
//     describe("PATCH", () => {
//       it("Should update infos jobs", async () => {
//         const { response } = await jobRequests.updateInfosJob(userData);
//         const { status, body } = response;

//         expect(status).toBe(200);
//         expect(body).toBeDefined();
//         expect(body).toHaveProperty("Job.id");
//         expect(body.Job.title).toBe("Teste Update");
//       });
//     });
//     ///////////////
//     ////////// Necessário os requests de Candidatos para implementar
//     ////
//     describe("PATCH", () => {
//       it("Should select one candidate", async () => {});
//     });
//     describe("PATCH", () => {
//       it("Should remove candidate", async () => {});
//     });
//     describe("PATCH", () => {
//       it("Should finish job", async () => {});
//     });
//     ////
//     ////////
//     ////////////
//     describe("DELETE", () => {
//       it("Should select one candidate", async () => {
//         const { response } = await jobRequests.deleteJob(userData);
//         const { status, body } = response;

//         expect(status).toBe(204);
//         expect(body).toBeDefined();
//       });
//     });
//   });
// });
