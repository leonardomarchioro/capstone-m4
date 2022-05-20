import {
  beforeAll,
  expect,
  it,
  describe,
  afterAll
} from "@jest/globals"
import request from "supertest"
import { app } from "../src/app"

describe("User routes", () => {

  beforeAll( async () => {
    await conectDatabase()
  })

  afterAll(async () => {
    await AppDataSource.query(`
      DELETE FROM users;
      DELETE FROM job;
      DELETE FROM reviews;
      DELETE FROM candidates;
      DELETE FROM category;
    `)

    await AppDataSource.destroy()
  })

  describe("Happy end", () => {
    
    const userData: {
      name: string
      email: string
      password: string
      phone: string
      id: string | null
      token: string | null
    } = {
      name: "Joao",
      email: "joao.exemplo@exemplo.com",
      password: "123456",
      phone: "00000000",
      id: null,
      token: null,
    }
  
    it.only("Should create a user", async () => {
      const response = await request(app).post("/user/signup").send(userData)
      
      const expectedUserProps = [
        "phone",
        "email",
        "name",
        "role",
        "id",
      ]
  
      expect(response.status).toBe(201)

      expectedUserProps.forEach( props => {
        expect(response.body).toHaveProperty(props)
      })
  
      userData.id = response.body.id
    })
  
    it("Should update a user by id", async () => {
      const newData = {
        name: "Teste da silva",
        email: "newTeste@exemplo.com",
        password: "987654321",
        phone: "00001000"
      }

      const response = await request(app).patch("/user/me").send(newData)

      expect(response.status).toBe(200)
      expect(response.body).not.toHaveProperty("password")

      for( let [key, value] of Object.entries(newData)) {
        expect(response.body).toHaveProperty(key)
        expect(response.body[key]).toBe(value)
      }
    })

    it("Should return a token(JWT)", async () => {
      const credentials = {
        email: userData.email,
        password: userData.password
      }

      const response = await request(app).post("/user/signin").send(credentials)

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("token")

      userData.token = response.body.token
    })

    it("Should get my own data by token", async () => {
      expect(userData.token).toBeDefined()

      const expectedProps = [
        "id",
        "name",
        "role",
        "phone",
        "email",
      ]

      const response = await request(app).get("/user/me")
        .auth(userData.token, { type: 'bearer' })

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("id")
      expect(response.body).not.toHaveProperty("password")

      expectedProps.forEach( prop => {
        expect(response.body).toHaveProperty(prop)
      })
    })
  })

})
