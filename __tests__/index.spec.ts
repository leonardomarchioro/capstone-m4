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
    email: string
    password: string
    phone: string
    id: string | null
  } = {
    name: "Joao",
    email: "joao.exemplo@exemplo.com",
    password: "123456",
    phone: "00000000",
    id: null
  }

  it("Should create a user", async () => {
    const response = await request(app).post("/user/signup").send(userData)
    
    const expectedUserProps = [
      "phone",
      "email",
      "name",
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

    const response = await request(app).get(`/user/${userData.id}`)

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

  it("Should update user data", async () => {
    const newUserData:{
      name: string
      phone: string
      password?: string
    } = {
      name: "Teste da silva",
      phone: "00001000",
      password: "987654321"
    }

    const response = await request(app).patch(`/user/${userData.id}`).send(newUserData)

    delete newUserData.password;

    const { name, phone } = response.body

    expect(response.status).toBe(200)
    expect(response.body).not.toHaveProperty("password")
    expect(response.body).toMatchObject(newUserData)

    expect(name).toBeDefined()
    expect(name).toBe(newUserData.name)
    
    expect(phone).toBeDefined()
    expect(phone).toBe(newUserData.phone)
  })
})
