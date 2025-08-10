# Frontend Spotify

Aplicação frontend desenvolvida em React, responsável pela interface de usuário para autenticação, consulta e gerenciamento de playlists, artistas e perfis do Spotify. Desenvolvida com foco em **performance**, **tipagem estática** e **boa experiência de desenvolvimento**.

## Sumário

* [Versão para Apresentação](#versão-para-apresentação)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Arquitetura e Organização](#arquitetura-e-organização)
* [Pré-requisitos](#pré-requisitos)
* [Configuração do Ambiente](#configuração-do-ambiente)
* [Como Executar Localmente](#como-executar-localmente)
* [Deploy (Fly.io)](#deploy-flyio)
* [Observações sobre as escolhas técnicas](#observações-sobre-as-escolhas-técnicas)

## Versão para Apresentação

A versão de apresentação está disponível online para testes em: [https://spotify.geison.dev](https://spotify.geison.dev)

Para acessar, é necessário autenticar com uma conta do Spotify. Por favor, envie seu nome e e-mail da conta Spotify para que eu possa adicioná-lo(a) como usuário autorizado.

## Tecnologias Utilizadas

* **Node.js** (v22+)
* **TypeScript**
* **React**
* **Vite** (ferramenta para build e desenvolvimento)
* **TanStack Router**
* **ESLint** (padronização de código)
* **Docker** (containerização)
* **Fly.io** (deploy cloud)

## Arquitetura e Organização

* **File-based Routing:** as rotas estão definidas automaticamente via arquivos em `src/routes`.

## Pré-requisitos

* Node.js 22+
* npm 10+

## Configuração do Ambiente

1. Copie o arquivo `.env.example` para `.env`:

   ```sh
   cp .env.example .env
   ```

2. Preencha as variáveis do Spotify no `.env`:

   ```env
   BACKEND_URL=http://127.0.0.1:3000
   ```

## Como Executar Localmente

Siga os passos abaixo para instalar as dependências, configurar as variáveis de ambiente e iniciar o servidor localmente do zero:

1. Instale as dependências:

   ```sh
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```sh
   npm run build
   ```

3. Inicie o servidor:

   ```sh
   npm start:local
   ```

   O servidor estará disponível em [http://127.0.0.1:5555](http://127.0.0.1:5555). Para acessar a aplicação, abra o navegador nesse endereço.

**Modo desenvolvimento:**

```sh
npm run dev
```

## Deploy (Fly.io)

O projeto já possui configuração pronta para deploy no Fly.io (`fly.toml`).

1. Instale o [Fly CLI](https://fly.io/docs/flyctl/install/)

2. Faça login:

   ```sh
   fly auth login
   ```

3. Crie a aplicação (caso não exista):

   ```sh
   fly launch
   ```

4. Faça o deploy:

   ```sh
   fly deploy
   ```

5. Configure as variáveis de ambiente no Fly:

   ```sh
   fly secrets set BACKEND_URL=http://your_backend_url
   ```

## Observações sobre as escolhas técnicas

* **Vite** foi escolhido por sua velocidade e simplicidade, permitindo um desenvolvimento ágil.
* **TanStack Router** oferece uma abordagem moderna e baseada em arquivos para roteamento, facilitando a organização do código.
* **TypeScript**: Tipagem estática para segurança e manutenção.
* **Docker**: Uniformiza execução em diferentes ambientes.
* **Fly.io**: Plataforma moderna para deploy de aplicações Node.js.
