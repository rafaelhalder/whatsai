import { WhatsappRepository } from '../repositories/WhatsappRepository'

interface CreateWhatsappInstanceRequest{
  token: string;
}
interface CreateWhatsappInstanceResponse {
  instanceName: string; 
  qrCodeBase64: string;
}

export class CreateWhatsappInstanceUseCase {
  constructor(private whatsappInstanceRepository: WhatsappRepository) {}

    async execute({token}: CreateWhatsappInstanceRequest): Promise<CreateWhatsappInstanceResponse> {
      const instanceName = 'user-' + Math.random().toString(36).substring(2, 10);
      const qrCodeBase64 = await this.whatsappInstanceRepository.createInstanceAndGetQRCode(token, instanceName)
      return { instanceName, qrCodeBase64 }
    }
}
