import { Router } from 'express'
import { createWhatsappInstanceController } from '@/http/controllers/createWhatsappInstanceController'

const router = Router()

router.post('/whatsapp/instance', createWhatsappInstanceController)

export default router