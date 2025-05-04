import { Request, Response, type NextFunction } from 'express'
import { CreateWhatsappInstanceUseCase } from '@/use-cases/createWhatsappInstance'
import { PrismaWhatsappRepository } from '@/repositories/WhatsappRepository'
export async function createWhatsappInstanceController(req: Request, res: Response, next: NextFunction) {
  const { token } = req.body
  const whatsappRepository = new PrismaWhatsappRepository()
  const useCase = new CreateWhatsappInstanceUseCase(whatsappRepository)
  const result = await useCase.execute({ token })
  res.status(201).json(result)
  next()
}