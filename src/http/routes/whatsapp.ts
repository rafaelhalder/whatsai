import { Router } from 'express'
import { CreateWhatsappInstanceController } from '@/http/controllers/instancewhatsapp'
export const whatsRoutes = Router()
const WhatsController = new CreateWhatsappInstanceController()
whatsRoutes.post('/', WhatsController.createWhatsappInstanceController)