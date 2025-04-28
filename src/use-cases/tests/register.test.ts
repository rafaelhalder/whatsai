import request from 'supertest';
import {prisma} from '@/lib/database/prisma';
import {app} from '@/app';
describe("RegisterUseCase", ()=> {
  let user_id: string;
  afterAll(async()=> {
    await prisma.user.delete({
      where: {
        id: user_id
      }
    })
  })
  it("should create a new user", async() => {
    const response = await request(app).post("/register").send({
      name: "John Doe",
      email: "ra@exec.com",
      password: "1234561"
    })
    
    expect(response.statusCode).toEqual(201)
    expect(response.body).toHaveProperty("user")
    expect(response.body.user).toHaveProperty("name", "John Doe")
    user_id = response.body.user.id
  })

  it("should ot create same email", async () => {
    const response = await request(app).post("/register").send({
      name: "Jodasdadshn Doe",
      email: "ra@exec.com",
      password: "1234561" 
    })
    expect(response.statusCode).toEqual(400)
    expect(response.body).toHaveProperty("message", "E-mail already exists")
  })
  it("should throw a validation error if email is invalid", async () => {
    const response = await request(app).post("/register").send({
      name: "John Doe",
      email: "invalid",
      password: "1234578"
    })

    expect(response.status).toBe(400)
    expect(response.body.message).toBe("Validation error")
  })
})