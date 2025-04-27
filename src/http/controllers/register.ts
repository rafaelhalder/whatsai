import {Request,Response,NextFunction, json} from "express";
import {z} from "zod";
import { RegisterUseCase } from "@/use-cases/register";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";

class registerController{
  async register(request: Request, response:Response,next: NextFunction){
    const registerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6)
    })

    const {name,email,password} = registerBodySchema.parse(request.body)
    try {
      const prismaUsersRepository = new PrismaUsersRepository()
      const registerUseCase = new RegisterUseCase(prismaUsersRepository)
      const user = await registerUseCase.execute({
        name,
        email,
        password
      })
      
      response.status(201).send(user)
      next()
    } catch (error) {
      throw error    
    }

  }
}

export {registerController}