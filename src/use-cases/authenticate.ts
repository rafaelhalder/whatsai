import type { UsersRepository } from "@/repositories/users-repository";
import type { User } from "@prisma/client";
import { compare } from "bcryptjs";
import { env } from "@/env";
import jwt from "jsonwebtoken";

interface AuthenticateUseCaseRequest{
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse{
  user : User,
  token: string;
}


export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository){}

  async execute({
    email,
    password
  }:AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse>{
    const user = await this.usersRepository.findByEmail(email)

    if(!user){
      throw new Error('Invalid credentials')
    }
    const doesPasswordMatch = await compare(password,user.passwordHash)
    if(!doesPasswordMatch){
      throw new Error('Invalid credentials')
    }
    const token = jwt.sign({
      sub: user.id
    }, env.JWT_SECRET,{expiresIn: '7d'})

    return {
      user,
      token
    }
  }
}