import { User } from "@/generated/prisma";

interface RegisterUseCaseRequest{
  email: string;
  password: string;
  name: string;
}

interface RegisterUseCaseResponse{
  user: User;
}

export class RegisterUseCase{
async execute({
  name,
  email,
  password
}:RegisterUseCaseRequest):Promise<any>{
// }:RegisterUseCaseRequest):Promise<RegisterUseCaseResponse>{
  return {}
}

}