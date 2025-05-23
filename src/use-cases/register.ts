import { User } from "@prisma/client";
import type { UsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { response } from "express";

interface RegisterUseCaseRequest{
  email: string;
  password: string;
  name: string;
}
type UserWithoutPassword = Omit<User, "passwordHash">;
interface RegisterUseCaseResponse{
  user: UserWithoutPassword;
}

export class RegisterUseCase{
  constructor(
    private usersRepository: UsersRepository
  ){}


async execute({
  name,
  email,
  password
}:RegisterUseCaseRequest):Promise<RegisterUseCaseResponse>{
  const passwordHash = await hash(password, 6)
  
  const userWithSameEmail = await this.usersRepository.findByEmail(email)
  if(userWithSameEmail){
    throw new UserAlreadyExistsError()
  }
  const user = await this.usersRepository.create({
    name,
    email,
    passwordHash,
  })

  const {passwordHash:_,...userWithoutPassword} = user

  return { user: userWithoutPassword };
}

}