## Fluxo de Implementação

Para garantir uma arquitetura limpa, com separação de responsabilidades e facilidade de testes e manutenção, siga este passo a passo ao implementar novas funcionalidades:

1. **Use-case:**  
   Toda lógica de negócio deve ser criada primeiro em um arquivo dentro da pasta `use-cases`. Isso centraliza as regras de negócio e facilita a reutilização.

2. **Repositório:**  
   Se for necessário acessar o banco de dados, crie ou adapte um repositório em `repositories`. Assim, o acesso a dados fica desacoplado da lógica de negócio.

3. **Controller:**  
   Implemente ou adapte a controller em `controllers` para receber as requisições HTTP e chamar o use-case correspondente. Isso mantém a controller simples e focada apenas no fluxo da requisição.

4. **Rota:**  
   Por fim, adicione ou ajuste a rota em `routes` para expor a funcionalidade via API.

5. **Teste de Integração:**  
   Implemente testes de integração para controllers e rotas, garantindo que todas as camadas funcionam juntas como esperado.

**Por que seguir esse fluxo?**  
Esse processo garante que cada camada do sistema tenha uma responsabilidade clara, tornando o código mais organizado, testável e fácil de manter.

**Resumo do fluxo:**  
`Use-case → Repositório → Controller → Rota → Teste de Integração`





repositories -> camada responsável por abstrair o acesso a dados. Aqui ficam as implementações que conversam diretamente com o banco (ex: Prisma), mas sempre através de interfaces, facilitando a troca de tecnologia ou a criação de mocks para testes.

use-cases -> onde fica toda a lógica de negócio da aplicação. Cada arquivo representa um caso de uso específico, totalmente desacoplado de detalhes de infraestrutura (como HTTP ou banco de dados). Os use-cases recebem os repositórios por injeção de dependência.

lib -> utilitários e integrações externas, como a configuração do Prisma Client, helpers, ou bibliotecas que não se encaixam nas outras camadas.

Dessa forma, cada responsabilidade fica bem separada, facilitando manutenção, testes e evolução do sistema.



src/
  app/                # Configuração principal do app (rotas, providers, etc)
  components/         # Componentes reutilizáveis (botões, inputs, cards, etc)
  features/           # Cada domínio/funcionalidade do sistema (ex: auth, painel, whatsapp)
    auth/
      components/     # Componentes específicos de autenticação
      pages/          # Páginas de login/cadastro
      hooks/          # Hooks relacionados (ex: useLogin)
      services/       # Comunicação com API (ex: login, register)
      types/          # Tipagens/interfaces do domínio
      utils/          # Funções utilitárias do domínio
    painel/
      components/
      pages/
      hooks/
      services/
      types/
      utils/
    whatsapp/
      ...
  hooks/              # Hooks globais (ex: useAuth, useTheme)
  layouts/            # Layouts de páginas (ex: PainelLayout, AuthLayout)
  pages/              # Páginas principais (usando React Router ou Next.js)
  routes/             # Definição das rotas do app
  styles/             # Arquivos globais do Tailwind e CSS customizado
  utils/              # Funções utilitárias globais
  assets/             # Imagens, ícones, fontes, etc.
  config/             # Configurações globais (ex: axios, env)
  index.tsx           # Entry point
  main.tsx            # (caso use Vite)

