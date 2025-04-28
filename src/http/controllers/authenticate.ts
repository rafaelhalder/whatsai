import { Request,Response,NextFunction } from "express";
import {z} from "zod";
import { makeAuthenticateUseCase } from "@/use-cases/factories/make-authenticate-use-case";

class authenticateController{
  async authenticate(request: Request, response:Response,next: NextFunction){
    const authenticateBodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6)
    })
  
    const {email,password} = authenticateBodySchema.parse(request.body)
    try {
      const authenticateUseCase = makeAuthenticateUseCase()
      const {user, token} = await authenticateUseCase.execute({
        email,
        password
      })
  
      response.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000
      })
      response.status(200).send({ token });
      next()
    } catch (error) {
      throw error    
    }
  }
}

export {authenticateController}