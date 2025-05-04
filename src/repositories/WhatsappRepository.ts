export interface WhatsappRepository {
  createInstanceAndGetQRCode(token: string, instanceName: string): Promise<string>
}

// Exemplo de implementação usando uma lib fictícia de WhatsApp
export class PrismaWhatsappRepository implements WhatsappRepository {
  async createInstanceAndGetQRCode(token: string, instanceName: string): Promise<string> {
    // Aqui você integra com a lib do WhatsApp e retorna o QRCode em base64
    // Exemplo fictício:
    // const client = new WhatsAppClient({ token, instanceName })
    // const qrCode = await client.getQRCode()
    // return qrCode.base64
    return 'base64qrcode' // mock
  }
}