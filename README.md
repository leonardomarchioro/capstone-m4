# API kenzie bicos.

# Guia prático de conteúdos:

- [API kenzie bicos.](#api-kenzie-bicos)
- [Guia prático de conteúdos:](#guia-prático-de-conteúdos)
  - [1. Visao geral do projeto](#1-visao-geral-do-projeto)
    - [Linguagem utilizada no projeto:](#linguagem-utilizada-no-projeto)
    - [URL da API:](#url-da-api)
  - [2. Diagrama de entidades relacionais](#2-diagrama-de-entidades-relacionais)
  - [3.1 Instalando as dependencias:](#31-instalando-as-dependencias)
  - [3.2 Configurando as variaveis de ambiente](#32-configurando-as-variaveis-de-ambiente)
  - [3.3 Ligando o servidor](#33-ligando-o-servidor)
  - [4. Users](#4-users)
    - [Endpoints da rota users](#endpoints-da-rota-users)
  - [4.1. Criação de Usuário](#41-criação-de-usuário)
    - [Exemplo de Request:](#exemplo-de-request)
    - [Corpo da Requisição:](#corpo-da-requisição)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup)
    - [Exemplo de Response:](#exemplo-de-response)
    - [Possíveis Erros:](#possíveis-erros)
  - [4.2. Login do usuário](#42-login-do-usuário)
    - [Exemplo de Request:](#exemplo-de-request-1)
    - [Corpo da Requisição:](#corpo-da-requisição-1)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-1)
    - [Exemplo de Response:](#exemplo-de-response-1)
    - [Possíveis Erros:](#possíveis-erros-1)
  - [4.3. Lista um usuário usando seu token como parâmetro](#43-lista-um-usuário-usando-seu-token-como-parâmetro)
    - [Exemplo de Request:](#exemplo-de-request-2)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição)
    - [Corpo da Requisição:](#corpo-da-requisição-2)
    - [Exemplo de Response:](#exemplo-de-response-2)
    - [Possíveis Erros:](#possíveis-erros-2)
  - [4.4. Lista todos os fornecedores usando o token de login como parâmetro.](#44-lista-todos-os-fornecedores-usando-o-token-de-login-como-parâmetro)
    - [Exemplo de Request:](#exemplo-de-request-3)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-1)
    - [Corpo da Requisição:](#corpo-da-requisição-3)
    - [Exemplo de Response:](#exemplo-de-response-3)
    - [Possíveis Erros:](#possíveis-erros-3)
  - [4.5. Atualizar nome e email de um usuário.](#45-atualizar-nome-e-email-de-um-usuário)
    - [Exemplo de Request:](#exemplo-de-request-4)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-2)
    - [Corpo da Requisição:](#corpo-da-requisição-4)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-2)
    - [Exemplo de Response:](#exemplo-de-response-4)
    - [Possíveis Erros:](#possíveis-erros-4)
  - [4.6. Atualizar senha de um usuário.](#46-atualizar-senha-de-um-usuário)
    - [Exemplo de Request:](#exemplo-de-request-5)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-3)
    - [Corpo da Requisição:](#corpo-da-requisição-5)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-3)
    - [Exemplo de Response:](#exemplo-de-response-5)
    - [Possíveis Erros:](#possíveis-erros-5)
  - [4.7. Atualizar função de um usuário.](#47-atualizar-função-de-um-usuário)
    - [Exemplo de Request:](#exemplo-de-request-6)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-4)
    - [Corpo da Requisição:](#corpo-da-requisição-6)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-4)
    - [Exemplo de Response:](#exemplo-de-response-6)
    - [Possíveis Erros:](#possíveis-erros-6)
  - [4.8. Deletar um usuário.](#48-deletar-um-usuário)
    - [Exemplo de Request:](#exemplo-de-request-7)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-5)
    - [Corpo da Requisição:](#corpo-da-requisição-7)
    - [Exemplo de Response:](#exemplo-de-response-7)
    - [Possíveis Erros:](#possíveis-erros-7)
  - [5 Jobs](#5-jobs)
    - [Endpoints da rota jobs.](#endpoints-da-rota-jobs)
  - [5.1 Criacao de um servico](#51-criacao-de-um-servico)
    - [Exemplo de request:](#exemplo-de-request-8)
    - [Corpo da requisicao:](#corpo-da-requisicao)
    - [Schema de validacao com Yup:](#schema-de-validacao-com-yup)
    - [Exemplo de response:](#exemplo-de-response-8)
    - [Possiveis erros de requisicao:](#possiveis-erros-de-requisicao)
  - [5.2 Listagem dos meus servicos:](#52-listagem-dos-meus-servicos)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-6)
    - [Corpo da Requisição:](#corpo-da-requisição-8)
    - [Exemplo de Response:](#exemplo-de-response-9)
    - [Possiveis erros:](#possiveis-erros)
  - [5.3 Listagem de todos os jobs](#53-listagem-de-todos-os-jobs)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-7)
    - [Corpo da Requisição:](#corpo-da-requisição-9)
    - [Exemplo de Response:](#exemplo-de-response-10)
    - [Possiveis erros:](#possiveis-erros-1)
  - [5.4 Listagem de um job especifico pelo id.](#54-listagem-de-um-job-especifico-pelo-id)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-8)
    - [Corpo da Requisição:](#corpo-da-requisição-10)
    - [Exemplo de Response:](#exemplo-de-response-11)
    - [Possiveis erros:](#possiveis-erros-2)
  - [5.5 Atualizacao das informacoes do job:](#55-atualizacao-das-informacoes-do-job)
    - [Corpo da Requisição:](#corpo-da-requisição-11)
    - [Exemplo de Response:](#exemplo-de-response-12)
    - [Possiveis erros:](#possiveis-erros-3)
  - [5.6 Atualizacao do candidato ao job:](#56-atualizacao-do-candidato-ao-job)
    - [Corpo da Requisição:](#corpo-da-requisição-12)
    - [Exemplo de Response:](#exemplo-de-response-13)
    - [Possiveis erros:](#possiveis-erros-4)
  - [5.7 Atualizacao para remover o supplier:](#57-atualizacao-para-remover-o-supplier)
    - [Corpo da Requisição:](#corpo-da-requisição-13)
    - [Exemplo de Response:](#exemplo-de-response-14)
    - [Possiveis erros:](#possiveis-erros-5)
  - [5.8 Atualizacao para finalizar o servico:](#58-atualizacao-para-finalizar-o-servico)
    - [Corpo da Requisição:](#corpo-da-requisição-14)
    - [Exemplo de Response:](#exemplo-de-response-15)
    - [Possiveis erros:](#possiveis-erros-6)
    - [5.9 Delete do job:](#59-delete-do-job)
    - [Corpo da Requisição:](#corpo-da-requisição-15)
    - [Exemplo de Response:](#exemplo-de-response-16)
    - [Possiveis erros:](#possiveis-erros-7)
  - [6 Candidates:](#6-candidates)
    - [Endpoints da rota candidates.](#endpoints-da-rota-candidates)
  - [6.1 Criar candidatura para um job.](#61-criar-candidatura-para-um-job)
    - [Corpo da Requisição:](#corpo-da-requisição-16)
    - [Exemplo de Response:](#exemplo-de-response-17)
    - [Possiveis erros:](#possiveis-erros-8)
  - [6.2 Lista todas as aplicacoes de candidatura do usuario:](#62-lista-todas-as-aplicacoes-de-candidatura-do-usuario)
    - [Corpo da Requisição:](#corpo-da-requisição-17)
    - [Exemplo de Response:](#exemplo-de-response-18)
    - [Possiveis erros:](#possiveis-erros-9)
  - [6.3 Lista todos os candidatos para um job:](#63-lista-todos-os-candidatos-para-um-job)
    - [Corpo da Requisição:](#corpo-da-requisição-18)
    - [Exemplo de Response:](#exemplo-de-response-19)
    - [Possiveis erros:](#possiveis-erros-10)
  - [6.4 Deletar uma candidatura:](#64-deletar-uma-candidatura)
    - [Corpo da Requisição:](#corpo-da-requisição-19)
    - [Exemplo de Response:](#exemplo-de-response-20)
    - [Possiveis erros:](#possiveis-erros-11)
  - [7 Reviews:](#7-reviews)
    - [Endpoints da rota candidates.](#endpoints-da-rota-candidates-1)
  - [7.1 Postar uma review:](#71-postar-uma-review)
    - [Corpo da Requisição:](#corpo-da-requisição-20)
    - [Exemplo de Response:](#exemplo-de-response-21)
    - [Possiveis erros:](#possiveis-erros-12)
  - [7.2 Listar uma review de um supplier](#72-listar-uma-review-de-um-supplier)
    - [Corpo da Requisição:](#corpo-da-requisição-21)
    - [Exemplo de Response:](#exemplo-de-response-22)
    - [Possiveis erros:](#possiveis-erros-13)
  - [7.3 Listar uma review de um job:](#73-listar-uma-review-de-um-job)
    - [Corpo da Requisição:](#corpo-da-requisição-22)
    - [Exemplo de Response:](#exemplo-de-response-23)
  - [7.4 Atualizar um review pelo id:](#74-atualizar-um-review-pelo-id)
    - [Corpo da Requisição:](#corpo-da-requisição-23)
    - [Exemplo de Response:](#exemplo-de-response-24)
    - [Possiveis erros:](#possiveis-erros-14)
  - [7.5 Deletar uma review pelo id:](#75-deletar-uma-review-pelo-id)
    - [Corpo da Requisição:](#corpo-da-requisição-24)
    - [Exemplo de Response:](#exemplo-de-response-25)
    - [Possiveis erros:](#possiveis-erros-15)

---

## 1. Visao geral do projeto

Dependencias utilizadas utilizadas.

- [prisma](https://www.prisma.io/docs/getting-started/quickstart)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [express](https://expressjs.com/pt-br/)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [express-yup-middleware](https://www.npmjs.com/package/express-yup-middleware)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths)
- [uuid](https://www.npmjs.com/package/uuid)
- [yup](https://www.npmjs.com/package/yup)

### Linguagem utilizada no projeto:

Todo o codigo da api foi feito a partir do typescript. Por isso, para instalar as dependencias sera necessario passar a tipagem e instalar as dev dependencies.

**@types/biblioteca -D**

### URL da API:

https://nossaurlaqui.com

## 2. Diagrama de entidades relacionais

![DER](DigramsCapstone.drawio.png)

## 3.1 Instalando as dependencias:

- Clone o repositorio para sua maquina;
- Rode o seguinte comando para instalar todas as dependencias e gerar sua node_modules:

```shell
yarn
```

ou caso utilize o gerenciador de pacotes npm:

```shell
npm install
```

## 3.2 Configurando as variaveis de ambiente

Crie o arquivo **.env** seguindo a estrutura definida pelo **.env.example**

```
.env

POSTGRES_PASSWORD=SUA_SENHA
POSTGRES_USER=SEU_USER
POSTGRES_DB=SEU_DB
SECRET_KEY=SUA_SECRET_KEY
DATABASE_URL="postgresql://SEU_USER_AQUI:SUA_SENHA_AQUI@localhost:5432/SEU_DB_AQUI?schema=public"
```

Dessa forma voce vai configurar suas credenciais do postgres.

## 3.3 Ligando o servidor

```
sudo docker-compose up postgres
yarn prisma migrate dev
yarn dev
```

## 4. Users

O objeto User é definido como:

| Campo      | Tipo    | Descrição                         |
| ---------- | ------- | --------------------------------- |
| id         | string  | Identificador único do usuário    |
| name       | string  | O nome do usuário.                |
| email      | string  | O e-mail do usuário.              |
| password   | string  | A senha de acesso do usuário      |
| phone      | string  | O telefone do usuário             |
| isSupplier | boolean | Informa se o usuário é fornecedor |

### Endpoints da rota users

| Método | Rota            | Descrição                                                           |
| ------ | --------------- | ------------------------------------------------------------------- |
| POST   | /user/signup    | Criação de um usuário.                                              |
| POST   | /user/signin    | Login do usuário.                                                   |
| GET    | /user/me        | Lista um usuário usando seu token como parâmetro.                   |
| GET    | /user/suppliers | Lista todos os fornecedores usando o token de login como parâmetro. |
| PATCH  | /user/me        | Atualizar nome e email de um usuário.                               |
| PATCH  | /user/password  | Atualizar senha de um usuário.                                      |
| PATCH  | /user/role      | Atualizar função de um usuário.                                     |
| DELETE | /user/me        | Deletar um usuário.                                                 |

---

## 4.1. Criação de Usuário

### Exemplo de Request:

```
POST /user/signup
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Bico",
  "email": "bico@mail.com",
  "password": "1234",
  "phone": "1234-5678"
}
```

### Schema de Validação com Yup:

```javascript
schema: {
    body: {
      yupSchema: object()
        .shape({
          name: string().required("name is required"),
          email: string()
            .required("email is required")
            .email("Invalid email format"),
          password: string().required("password is required"),
          phone: string().required("Phone is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "abfe0aca-f0f4-43d6-be13-2419fa172f19",
  "name": "Bico",
  "email": "bico@email.com",
  "phone": "1234-5678",
  "isSupplier": false
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                 |
| --------------- | ------------------------- |
| 409 Conflict    | Email already registered. |
| 400 Bad Request | Key is required.          |

---

## 4.2. Login do usuário

### Exemplo de Request:

```
POST /user/signin
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "bico@mail.com",
  "password": "1234"
}
```

### Schema de Validação com Yup:

```javascript
schema: {
    body: {
      yupSchema:object()
        .shape({
          email: string()
            .required("email is required")
            .email("Invalid email format"),
          password: string().required("password is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNDBkMTA1ZC1mYTIwLTQ0NGQtOTY4YS05OGNhNWMwODMzZDIiLCJpYXQiOjE2NTMyNjAxNzEsImV4cCI6MTY1MzM0NjU3MX0.aysXmx2fEiTyNzJ_V4S7x5T61Ms8QGLpd3VZlwKScHA"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição             |
| ---------------- | --------------------- |
| 401 Unauthorized | Wrong email/password. |
| 400 Bad Request  | Key is required.      |

---

## 4.3. Lista um usuário usando seu token como parâmetro

### Exemplo de Request:

```
GET /user/me
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "b40d105d-fa20-444d-968a-98ca5c0833d2",
  "name": "Bico",
  "email": "bico@mail.com",
  "phone": "1234-5678",
  "isSupplier": false
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 4.4. Lista todos os fornecedores usando o token de login como parâmetro.

### Exemplo de Request:

```
GET /user/suppliers
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "b40d105d-fa20-444d-968a-98ca5c0833d2",
		"name": "Bico Supplier",
		"email": "bico_supplier@mail.com",
		"phone": "1234-5678",
		"isSupplier": true
	}
]

OU

[]
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 4.5. Atualizar nome e email de um usuário.

### Exemplo de Request:

```
PATCH /user/me
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
{
  "name": "Bico Updated",
  "email": "bico_updated@email.com"
}
```

### Schema de Validação com Yup:

```javascript
schema: {
    body: {
      yupSchema: object()
        .shape({
          name: string(),
          email: string().email("Invalid email format"),
          phone: string(),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Profile updated!",
  "updatedUser": {
    "id": "b40d105d-fa20-444d-968a-98ca5c0833d2",
    "name": "Bico Updated",
    "email": "bico_updated@email.com",
    "phone": "5678-1234",
    "isSupplier": true
  }
}
```

### Possíveis Erros:

| Código do Erro   | Descrição             |
| ---------------- | --------------------- |
| 401 Unauthorized | Unauthorized.         |
| 400 Bad Request  | Invalid email format. |

## 4.6. Atualizar senha de um usuário.

### Exemplo de Request:

```
PATCH /user/password
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
{
  "currentPassword": "1234",
  "newPassword": "12345"
}
```

### Schema de Validação com Yup:

```javascript
schema: {
    body: {
      yupSchema: object()
        .shape({
          currentPassword: string().required("currentPassword is required"),
          newPassword: string().required("newPassword is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Password updated!"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                 |
| ---------------- | ------------------------- |
| 401 Unauthorized | Unauthorized.             |
| 400 Bad Request  | New Password is required. |

## 4.7. Atualizar função de um usuário.

### Exemplo de Request:

```
PATCH /user/role
Host: http://localhost:3000 -- **MUDAR**
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
{
  "currentPassword": "12345",
  "role": true
}
```

### Schema de Validação com Yup:

```javascript
schema: {
    body: {
      yupSchema: object()
        .shape({
          currentPassword: string().required("password is required"),
          role: boolean().required("role is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Role updated!"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                     |
| ---------------- | ----------------------------- |
| 401 Unauthorized | Unauthorized.                 |
| 400 Bad Request  | Current password is required. |
| 400 Bad Request  | Role is required.             |

## 4.8. Deletar um usuário.

### Exemplo de Request:

```
DELETE /user/me
Host: http://localhost:3000 -- **MUDAR**
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 5 Jobs

O objeto jobs e definido como:

| Campo        | Tipo   | Descrição                                |
| ------------ | ------ | ---------------------------------------- |
| title        | string | titulo do trabalho requisitado           |
| description  | string | descricao do servico requisitado         |
| cep          | string | cep de onde o servico sera feito         |
| deliveryDate | string | data prevista para realizacao do servico |
| category     | string | id da categoria do servico               |

### Endpoints da rota jobs.

| Método | Rota                     | Descrição                                |
| ------ | ------------------------ | ---------------------------------------- |
| post   | /job/                    | cria um servico                          |
| get    | /job/me                  | lista meus servicos                      |
| get    | /job/all                 | lista todos os servicos                  |
| get    | /job/one/:jobId          | lista todos os servicos do user logado   |
| patch  | /job/:id                 | atualiza dados de servico do user logado |
| patch  | /job/:jobId/supplier     | atualiza quem ira realizar o servico     |
| patch  | /job/:id/remove/supplier | remove o realiador atual do servico      |
| patch  | /job/:id/end             | finaliza o servico                       |
| delete | /job/:id                 | deleta o servico pedido pelo user logado |

## 5.1 Criacao de um servico

### Exemplo de request:

```
POST /job/
Host: http://localhost:3000
Authorization: bearer token
Content-type: application/json
```

### Corpo da requisicao:

```json
{
  "title": "Aula de matematica",
  "description": "Preciso aprender a fazer contas de porcentagem.",
  "cep": "1234567",
  "deliveryDate": "2024-07-21",
  "category": 2
}
```

### Schema de validacao com Yup:

```javascript

  schema: {
    body: {
      yupSchema: object()
        .shape({
          title: string().required("title is required"),
          description: string().required("description "),
          deliveryDate: string().required("deliveryDate is required"),
          cep: string().required("cep is required"),
          category: string().required("category is required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};
```

### Exemplo de response:

```
201 Created
```

```json
{
  "message": "jobs has been sucessfully created!",
  "Job": {
    "id": "5b97ca0e-bd55-4983-b9c1-d12ee3c3eba6",
    "title": "Aula de matematica",
    "description": "Preciso aprender a fazer contas de porcentagem.",
    "category": "Aulas Particulares",
    "deliveryDate": "2024-07-21T00:00:00.000Z",
    "cep": "1234567",
    "status": "available"
  },
  "Client": {
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "name": " Gabriel",
    "email": "gabriel@email.com",
    "phone": "1234-5678"
  }
}
```

### Possiveis erros de requisicao:

| Código do Erro  | Descrição        |
| --------------- | ---------------- |
| 400 Bad Request | Key is required. |

## 5.2 Listagem dos meus servicos:

```
GET /job/me
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User jobs",
  "Jobs": [
    {
      "infos": {
        "id": "5b97ca0e-bd55-4983-b9c1-d12ee3c3eba6",
        "title": "Aula de matematica",
        "description": "Preciso aprender a fazer contas de porcentagem.",
        "category": "Aulas Particulares",
        "deliveryDate": "2024-07-21T00:00:00.000Z",
        "status": "available",
        "cep": "1234567"
      },
      "supplier": {},
      "review": {}
    }
  ]
}
```

### Possiveis erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 5.3 Listagem de todos os jobs

```
GET /job/all
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
Vazio
```

**Importante ressaltar que essa rota passa por um middleware de verificacao alem do bearer token**

```typescript
// esse middleware verifica se o user logado e um supplier

verifyAlreadySupplier:

{
	"id": "3177dc8a-75d8-42bf-80be-20fd79cd945f",
	"name": "Bico Updated",
	"email": "bico_updated@kenzie.com",
	"phone": "5678-1234",
	"isSupplier": true // <- deve ser true
}
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "7b71cf03-9c5a-41c8-ae56-9e1a06fd5ac0",
    "title": "Aula de matematica",
    "description": "Preciso aprender a fazer contas de porcentagem.",
    "categories": "{ name: Aulas Particulares }",
    "deliveryDate": " 2024-07-21T00:00:00.000Z",
    "status": "available", // ... <- Todos os jobs cadastrados como avaiable estarao registrados aqui
    "cep": "1234567",
    "userId": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "users": {
      "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
      "name": "Gabriel ",
      "email": "biel@email.com",
      "phone": "1234-5678"
    }
  }
]
```

### Possiveis erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 5.4 Listagem de um job especifico pelo id.

```
GET /job/one/:jobId
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro    | Tipo   | Descrição                             |
| ------------ | ------ | ------------------------------------- |
| Bearer Token | string | Token de acesso temporário do usuário |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Job are listed",
  "job": {
    "category": "Aulas Particulares",
    "cep": "1234567",
    "deliveryDate": "2024-07-21T00:00:00.000Z",
    "description": "Preciso aprender a fazer contas de porcentagem.",
    "id": "5b97ca0e-bd55-4983-b9c1-d12ee3c3eba6",
    "status": "doing",
    "title": "Aula de matematica"
  },
  "Client": {
    "name": "Gabriel ",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Supplier": {
    "name": "Gabriel Martelada",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Review": {}
}
```

### Possiveis erros:

| Código do Erro     | Descrição      |
| ------------------ | -------------- |
| 401 Unauthorized   | Unauthorized.  |
| 404 Page not found | Job not found! |

## 5.5 Atualizacao das informacoes do job:

```
PATCH /job/:id
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por dois middlewares de verificacao alem do bearer token**

```typescript
// esse middleware verifica se o user logado e um supplier

verifyAlreadySupplier:

{
	"id": "3177dc8a-75d8-42bf-80be-20fd79cd945f",
	"name": "Bico Updated",
	"email": "bico_updated@kenzie.com",
	"phone": "5678-1234",
	"isSupplier": true // <- deve ser true
}
```

```typescript
// esse middleware verifica se o user logado e um supplier

verifyAlreadyStarted:

{
  "message": "Job are listed",
  "job": {
    "category": "Aulas Particulares",
    "cep": "1234567",
    "deliveryDate": "2024-07-21T00:00:00.000Z",
    "description": "Preciso aprender a fazer contas de porcentagem.",
    "id": "5b97ca0e-bd55-4983-b9c1-d12ee3c3eba6",
    "status": "doing",  // <- verifica se o status e diferente de avaiable
    "title": "Aula de matematica"
  },
  "Client": {
    "name": "Gabriel ",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Supplier": {
    "name": "Gabriel Martelada",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Review": {}
}
```

```typescript
 schema: {
    body: {
      yupSchema: object()
        .shape({
          title: string(),
          description: string(),
          categoryId: number(),
          cep: string(),
          deliveryDate: string(),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },

```

### Corpo da Requisição:

```json
// Meramente um exemplo

{
  "title": "Novo titulo",
  "description": "Nova descricao",
  "categoryId": 6
}

// Keys que podem receber update:
// title
// description
// categoryId
// cep
// deliveryDate
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Job updated",
  "Job": {
    "id": "7b71cf03-9c5a-41c8-ae56-9e1a06fd5ac0",
    "title": "Novo titulo",
    "description": "Nova descricao",
    "category": "Reforma",
    "cep": "1234567",
    "deliveryDate": "2024-07-21T00:00:00.000Z"
  }
}
```

### Possiveis erros:

| Código do Erro     | Descrição            |
| ------------------ | -------------------- |
| 401 Unauthorized   | Unauthorized.        |
| 404 Page not found | Job not found!       |
| 409 Conflict       | Job already started! |

## 5.6 Atualizacao do candidato ao job:

```
PATCH /job/:jobId/supplier
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por dois middlewares de verificacao alem do bearer token**

```typescript
// esse middleware verifica se ja existe um supplier para o job.

verifyAlreadySupplier:

{
	"id": "3177dc8a-75d8-42bf-80be-20fd79cd945f",
	"name": "Bico Updated",
	"email": "bico_updated@kenzie.com",
	"phone": "5678-1234",
	"isSupplier": true // <- deve ser true
}
```

```typescript
// esse middleware verifica se o user logado e um supplier && se o job realmente existe.

verifyAlreadyStarted:

{
  "message": "Job are listed",
  "job": {
    "category": "Aulas Particulares",
    "cep": "1234567",
    "deliveryDate": "2024-07-21T00:00:00.000Z",
    "description": "Preciso aprender a fazer contas de porcentagem.",
    "id": "5b97ca0e-bd55-4983-b9c1-d12ee3c3eba6",
    "status": "doing",  // <- verifica se o status e diferente de avaiable
    "title": "Aula de matematica"
  },
  "Client": {
    "name": "Gabriel ",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Supplier": {
    "name": "Gabriel Martelada",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Review": {}
}
```

```typescript
// esse middleware verifica se o supplier e candidato a vaga do job.

verifyIsCandidate:

{
	"candidatesQuantity": 1,
	"candidates": [
		{
			"id": "b43fbfe9-df7b-4cc4-b801-d2a654ccde8e",
			"userId": "6fb3f08f-66d5-4a79-a742-666b69baea23", // <- verifica se o userId e igual ao supplierId recebido pelo body
			"jobId": "0c120968-3975-409c-a220-af63ee7d76be"
		}
	]
}
```

```typescript
 schema: {
    body: {
      yupSchema: object()
        .shape({
          supplierId: string().required("supplier id required"),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },

```

### Corpo da Requisição:

```json
{
  "supplierId": "6fb3f08f-66d5-4a79-a742-666b69baea23"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Select supplier!",
  "job": {
    "category": "Aulas Particulares",
    "cep": "1234567",
    "deliveryDate": "2024-07-21T00:00:00.000Z",
    "description": "Preciso aprender a fazer contas de porcentagem.",
    "id": "5b97ca0e-bd55-4983-b9c1-d12ee3c3eba6",
    "status": "doing",
    "title": "Aula de matematica"
  },
  "Client": {
    "name": "Gabriel Martelada",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Supplier": {
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "name": "Gabriel ",
    "email": "biel1@email.com",
    "phone": "1234-5678"
  }
}
```

### Possiveis erros:

| Código do Erro     | Descrição                  |
| ------------------ | -------------------------- |
| 401 Unauthorized   | Unauthorized.              |
| 404 Page not found | Job not exists!            |
| 409 Conflict       | Supplier already selected! |

## 5.7 Atualizacao para remover o supplier:

```
PATCH /job/:id/remove/supplier
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```
{
	"message": "Supplier removed!"
}
```

### Possiveis erros:

| Código do Erro      | Descrição       |
| ------------------- | --------------- |
| 401 Unauthorized    | Unauthorized.   |
| 500 QUEBRA A PAGINA | QUEBRA A PAGINA |

## 5.8 Atualizacao para finalizar o servico:

```
PATCH /job/:jobId/end
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por outro middleware de verificacao alem do bearer token**

```typescript
// esse middleware verifica se:

// o  status e igual a avaiable, caso sim, o servico nao pode ser finalizado sem um supplier.

// o status e igual a finished, caso sim, o servico ja foi finalizado e nao pode ser finalziado novamente.

verifyJobAlreadyUpToFinish:
{
  "message": "Job are listed",
  "job": {
    "category": "Aulas Particulares",
    "cep": "1234567",
    "deliveryDate": "2024-07-21T00:00:00.000Z",
    "description": "Preciso aprender a fazer contas de porcentagem.",
    "id": "5b97ca0e-bd55-4983-b9c1-d12ee3c3eba6",
    "status": "doing", // <- status a ser avaliado deve ser igual a doing
    "title": "Aula de matematica"
  },
  "Client": {
    "name": "Gabriel ",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Supplier": {
    "name": "Gabriel Martelada",
    "id": "6fb3f08f-66d5-4a79-a742-666b69baea23",
    "email": "biel@email.com",
    "phone": "1234-5678"
  },
  "Review": {}
}

```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```typescript
{
	"message": "Job finished!",
	"job": {
		"category": "Aulas Particulares",
		"cep": "1234567",
		"deliveryDate": "2024-07-21T00:00:00.000Z",
		"description": "teste",
		"id": "0f9e0fae-114f-42f7-bb47-761d6a760e99",
		"status": "finished",
		"title": "123456"
	},
	"Client": {
		"name": "leo",
		"id": "f138b315-b32c-400e-9312-e2012efb89e6",
		"email": "leo@email.com",
		"phone": "1234-5678"
	},
	"Supplier": {
		"name": "leo",
		"id": "f138b315-b32c-400e-9312-e2012efb89e6",
		"email": "leo@email.com",
		"phone": "1234-5678"
	}
}
```

### Possiveis erros:

| Código do Erro   | Descrição                                     |
| ---------------- | --------------------------------------------- |
| 401 Unauthorized | Unauthorized.                                 |
| 409 Conflict     | service cannot be finished without a supplier |
| 409 Conflict     | service already finished                      |

### 5.9 Delete do job:

```
PATCH /job/:id
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```json
vazio
```

### Possiveis erros:

| Código do Erro     | Descrição      |
| ------------------ | -------------- |
| 401 Unauthorized   | Unauthorized.  |
| 500 QUERBRA PAGINA | QUERBRA PAGINA |

## 6 Candidates:

O objeto de candidates e definido como:

| Campo | Tipo   | Descrição                                   |
| ----- | ------ | ------------------------------------------- |
| jobId | string | id do job que o user pretende se candidatar |

### Endpoints da rota candidates.

| Método | Rota                  | Descrição                              |
| ------ | --------------------- | -------------------------------------- |
| post   | /candidate/           | cria uma candidatura                   |
| get    | candidate/job/:idJob  | lista todos candidatos para um servico |
| get    | /candidate/me         | lista todas minhas candidaturas        |
| delete | /candidate/job/:idJob | deleta uma candidatura                 |

## 6.1 Criar candidatura para um job.

```
POST /candidate/
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por outro middleware de verificacao alem do bearer token**

```typescript

verifyCandidateNotExists // <- verifica se o candidato ja nao existe

verifyIsSupplier

{
	"id": "ac765dae-f724-49fa-83fb-50bdc985d946",
	"name": "biel",
	"email": "biel33@email.com",
	"phone": "1234-5678",
	"isSupplier": true // <- faz a verificacao se o possivel candidato e um supplier.
}

verifyOwnJob // <- verifica se o job instanciado pertece ao candidato, caso sim, nao e possivel a candidatura.


```

### Corpo da Requisição:

```json
{
  "jobId": "1c1bac07-e3f7-48d7-a2b3-8f3c671677cc"
}
```

### Exemplo de Response:

```json
{
  "Candidate": {
    "id": "ac765dae-f724-49fa-83fb-50bdc985d946",
    "name": "biel",
    "email": "biel33@email.com",
    "phone": "1234-5678"
  },
  "Job": {
    "id": "1c1bac07-e3f7-48d7-a2b3-8f3c671677cc",
    "title": "teste 2",
    "description": "teste",
    "deliveryDate": "2024-07-21T00:00:00.000Z",
    "cep": "1234567",
    "category": "Autos"
  },
  "Client": {
    "id": "ac765dae-f724-49fa-83fb-50bdc985d946",
    "name": "biel",
    "email": "biel33@email.com",
    "phone": "1234-5678"
  }
}
```

### Possiveis erros:

| Código do Erro   | Descrição                             |
| ---------------- | ------------------------------------- |
| 401 Unauthorized | Unauthorized.                         |
| 409 Conflict     | You have already applied for this job |

## 6.2 Lista todas as aplicacoes de candidatura do usuario:

```
GET /candidate/me
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por outro middleware de verificacao alem do bearer token**

```typescript


verifyIsSupplier

{
	"id": "ac765dae-f724-49fa-83fb-50bdc985d946",
	"name": "biel",
	"email": "biel33@email.com",
	"phone": "1234-5678",
	"isSupplier": true // <- faz a verificacao se o possivel candidato e um supplier.
}


```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```json
{
  "candidacysQuantity": "you have 1 applications for service(s)",
  "candidacys": [
    {
      "id": "56cbe15f-5373-49d0-ae50-e22e0b552744",
      "userId": "ac765dae-f724-49fa-83fb-50bdc985d946",
      "jobId": "1c1bac07-e3f7-48d7-a2b3-8f3c671677cc"
    }
  ]
}
```

### Possiveis erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 6.3 Lista todos os candidatos para um job:

```
GET /candidate/job/:idJob
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```json
{
	"candidatesQuantity": 1,
	"candidates": [
		{
			"id": "56cbe15f-5373-49d0-ae50-e22e0b552744",
			"userId": "ac765dae-f724-49fa-83fb-50bdc985d946",
			"jobId": "1c1bac07-e3f7-48d7-a2b3-8f3c671677cc"
		}
	]
}
}
```

### Possiveis erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 6.4 Deletar uma candidatura:

```
DELETE /candidate/job/:idJob
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por outro middleware de verificacao alem do bearer token**

```typescript


verifyIsSupplier

{
	"id": "ac765dae-f724-49fa-83fb-50bdc985d946",
	"name": "biel",
	"email": "biel33@email.com",
	"phone": "1234-5678",
	"isSupplier": true // <- faz a verificacao se o possivel candidato e um supplier.
}


```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```json
{
  "message": "Deleted candidacy"
}
```

### Possiveis erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 7 Reviews:

O objeto de reviews e definido como:

| Campo   | Tipo   | Descrição                          |
| ------- | ------ | ---------------------------------- |
| score   | string | nota do servico                    |
| comment | string | feedback comentado sobre o servico |

### Endpoints da rota candidates.

| Método | Rota                         | Descrição                       |
| ------ | ---------------------------- | ------------------------------- |
| post   | /review/:idJob               | cria uma review de algum job    |
| get    | /review/:idJob               | lista uma review pelo id        |
| get    | /review/supplier/:idSupplier | lista reviews de um supplier    |
| patch  | /review/:idReview            | atualiza uma review pelo seu id |
| delete | /review/:idReview            | deleta uma review pelo seu id   |

## 7.1 Postar uma review:

```
POST /review/:idJob
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por outro middleware de verificacao alem do bearer token**

```typescript


verifyJobIsFinished

{
	"message": "User jobs",
	"Jobs": [
		{
			"infos": {
				"id": "5a63b42e-ab6f-4aa6-8524-142c7235b2be",
				"title": "teste 2",
				"description": "teste",
				"category": "Autos",
				"deliveryDate": "2024-07-21T00:00:00.000Z",
				"status": "finished", // <- verifica se o status esta como finished
				"cep": "1234567"
			},
			"supplier": {},// <- campo preenchido com supplier
			"review": {
				"id": "a94b30a5-baed-429a-b016-0fb9558e9610",
				"score": 4,
				"comment": "muito bom"
			}
		}
	]
}

verifyIfExistsReview

{
	"message": "User jobs",
	"Jobs": [
		{
			"infos": {
				"id": "5a63b42e-ab6f-4aa6-8524-142c7235b2be",
				"title": "teste 2",
				"description": "teste",
				"category": "Autos",
				"deliveryDate": "2024-07-21T00:00:00.000Z",
				"status": "finished",
				"cep": "1234567"
			},
			"supplier": {},  // <- campo preenchido com supplier
			"review": {   // <- verifica se a review ja existe
				"id": "a94b30a5-baed-429a-b016-0fb9558e9610",
				"score": 4,
				"comment": "muito bom"
			}
		}
	]
}

generalCheckReview // <- impede que o dono do job faca a review de seu trabalho.


```

### Corpo da Requisição:

```json
{
  "score": 4,
  "comment": "muito bom"
}
```

### Exemplo de Response:

```json
{
  "id": "a94b30a5-baed-429a-b016-0fb9558e9610",
  "score": 4,
  "comment": "muito bom"
}
```

### Possiveis erros:

| Código do Erro   | Descrição              |
| ---------------- | ---------------------- |
| 401 Unauthorized | Unauthorized.          |
| 400 Bad Request  | Job unfinished.        |
| 409 Conflict     | Review already exists! |

## 7.2 Listar uma review de um supplier

```
GET /review/supplier/:idSupplier
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio

```

### Exemplo de Response:

```json
[
  {
    "jobs": {
      "reviews": {
        "id": "a94b30a5-baed-429a-b016-0fb9558e9610",
        "score": 4,
        "comment": "muito bom"
      }
    }
  }
]
```

### Possiveis erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 7.3 Listar uma review de um job:

```
GET /review/:idJob
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```json
{
  "review": {
    "id": "a94b30a5-baed-429a-b016-0fb9558e9610",
    "score": 4,
    "comment": "muito bom"
  },
  "supplier": {
    "id": "db581608-3cfe-409e-ad7c-8d7f0ebf2dbc",
    "jobId": "5a63b42e-ab6f-4aa6-8524-142c7235b2be",
    "userId": "a81e1dd3-cc09-4d08-acc4-b6b20172b611"
  }
}
```

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 7.4 Atualizar um review pelo id:

```
PATCH /review/:idReview
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por outro middleware de verificacao alem do bearer token**

```typescript
generalCheckReview; // <- impede que o dono do job faca a review de seu trabalho.
```

### Corpo da Requisição:

```json
{
  // as keys de score e comments podem receber update
  "score": 3
}
```

### Exemplo de Response:

```json
{
  "message": "Review updated!"
}
```

### Possiveis erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 7.5 Deletar uma review pelo id:

```
DELETE /review/:idReview
Host: http://localhost:3000
Authorization: Bearer Token
Content-type: application/json
```

**Importante ressaltar que essa rota passa por outro middleware de verificacao alem do bearer token**

```typescript
generalCheckReview; // <- impede que o dono do job faca a review de seu trabalho.
```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```json
{
  "message": "Deleted candidacy"
}
```

### Possiveis erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |
