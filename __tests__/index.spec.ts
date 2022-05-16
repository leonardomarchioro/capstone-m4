import {
  beforeAll,
  expect,
  it,
  describe
} from "@jest/globals"
import request from "supertest"
import { app } from "../src/app"

describe("User routes", () => {

  const userData: {
    name: string
    cpf: string
    email: string
    password: string
    phone: string
    id: string | null
  } = {
    name: "Joao",
    cpf: "00000000000",
    email: "joao.exemplo@exemplo.com",
    password: "123456",
    phone: "00000000",
    id: null
  }

  it("Should create a user", async () => {
    const response = await request(app).post("/users").send(userData)
    
    const expectedUserProps = [
      "phone",
      "email",
      "name",
      "cep",
      "id",
    ]

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("accessToken")
    expect(response.body).toHaveProperty("user")
    expect(response.body.user).toHaveProperty("id")

    expectedUserProps.forEach( props => {
      expect(response.body.user).toHaveProperty(props)
    })

    userData.id = response.body.user.id
  })

  it("Should get a user with a id", async () => {
    expect(userData.id).not.toBeNull()

    const response = await request(app).get(`/users/${userData.id}`)

    const expectedProps = [
      "email",
      "name",
      "type",
      "cep",
      "id",
    ]

    expect(response.body).not.toHaveProperty("password")

    expectedProps.forEach(prop => {
      expect(response.body).toHaveProperty(prop)
    })
  })
})