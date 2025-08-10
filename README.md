# Spotify App - Frontend

> ⚠ Este repositório contém o frontend da aplicação.

A aplicação frontend implementa uma interface de usuário para autenticação, consulta e criação de playlists, artistas, álbuns e o perfil do usuário no Spotify.

## Versão para Apresentação

A versão de apresentação está disponível online para testes em: [https://spotify.geison.dev](https://spotify.geison.dev)

Para acessar, é necessário autenticar com uma conta do Spotify. Por favor, envie seu nome e e-mail da conta Spotify para que eu possa adicioná-lo(a) como usuário autorizado.

## Links Úteis

Documentação interativa da API (via Scalar): <https://docs.spotify.geison.dev>

> ⚠ O [Scalar](https://scalar.com) é um visualizador moderno para arquivos OpenAPI, usado aqui para explorar e testar os endpoints gerados pelo backend.

Repositório do backend: <https://github.com/GeisonJr/spotify-api>

Repositório do frontend: <https://github.com/GeisonJr/spotify-app>

## 🚀 Tecnologias utilizadas

* **Node.js** + **TypeScript** – execução e tipagem
* **React** (biblioteca para construção de interfaces)
* **React Query** (gerenciamento de estado e cache de dados)
* **Vite** (ferramenta para build e desenvolvimento)
* **ESLint** (padronização de código)
* **Docker** (containerização)
* **Fly.io** (deploy cloud)

## 📌 Funcionalidades implementadas

* Autenticação com Spotify [OAuth 2.0 Authorization Code Flow com refresh token](https://developer.spotify.com/documentation/web-api/tutorials/code-flow)
* Listagem de artistas mais ouvidos
* Listagem de álbuns de um artista específico
* Criação e listagem de playlists do usuário
* Exibição do perfil do usuário
* Paginação de resultados

## 📂 Estrutura de pastas

* **File-based Routing:** as rotas estão definidas automaticamente via arquivos em `src/routes`.

```dir
src
├── routes
│   ├── <root>   # tela de login
│   ├── home     # tela inicial
│   ├── user     # perfil
│   ├── artist   # artistas mais ouvidos e álbuns de um artista
│   └── playlist # criação e listagem de playlists
├── components   # componentes reutilizáveis
├── hooks        # hooks personalizados
├── functions    # funções auxiliares
└── types        # tipos TypeScript
```

## ✅ Checklist de requisitos

### Requisitos obrigatórios

* [x] Segmentação de commits
* [x] Lint
* [x] Autenticação via Spotify
* [x] Listar artistas
* [x] Listar álbuns de um artista
* [x] Utilizar paginação (scroll infinito ou não)
* [x] Funcionamento offline
* [x] Testes unitários - Backend
* [x] Deploy da aplicação

### Bônus

* [ ] Testes E2E
* [ ] CI/CD (CI não implementado, CD implementado via Fly.io)
* [ ] Responsividade
* [ ] Qualidade de código (SonarQube)
* [ ] PWA

### Outros critérios

* [x] Exibir perfil do usuário
* [x] Criar playlists para o usuário
* [x] Listar playlists do usuário
* [x] Documentação da API - Backend

## ⚙️ Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/GeisonJr/spotify-app.git
cd spotify-app
```

### 2. Criar arquivo `.env` com variáveis

```env
BACKEND_URL=http://localhost:3000
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Rodar em modo desenvolvimento

```bash
npm run dev
```

## 📦 Deploy

O deploy está configurado via **Fly.io**.
Para publicar alterações:

```bash
fly deploy
```

## Observações sobre as escolhas técnicas

* **Estrutura de pastas organizada** para facilitar a navegação e manutenção do código, com separação clara entre rotas, middleware, funções auxiliares e testes.
* **Vite** foi escolhido por sua velocidade e simplicidade, permitindo um desenvolvimento ágil.
* **TanStack Router** oferece uma abordagem moderna e baseada em arquivos para roteamento, facilitando a organização do código.
* **React Query** é utilizado para gerenciamento eficiente de estado e cache, melhorando a performance e a experiência do usuário.
* **TypeScript** para tipagem forte e prevenção de erros em tempo de desenvolvimento.
* **Docker** para containerização, garantindo consistência entre ambientes de desenvolvimento e produção.
