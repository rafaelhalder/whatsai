import axios from "axios"

export interface WhatsappRepository {
  createInstanceAndGetQRCode(token: string, instanceName: string): Promise<string>
}

// Exemplo de implementação usando uma lib fictícia de WhatsApp
export class PrismaWhatsappRepository implements WhatsappRepository {
  async createInstanceAndGetQRCode(token: string, instanceName: string): Promise<string> {
    const response = await axios.post("https://hsapi.studio/instance/create",{
      qrcode: true,
      integration: "WHATSAPP-BAILEYS",
      instanceName
    },
  {
    headers:{
      apikey: token
    }
  })
    console.log(response)
    if (response.status !== 201) {
      throw new Error("Failed to create instance")
    }
    
    return 'base64qrcode' 
  }
}