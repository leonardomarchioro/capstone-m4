<!--
    Documento reservado para documentacao das rotas:
        - 1 - User
        - 2 - Candidates
 -->

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
  - [4. **Users**](#4-users)
    - [Endpoints](#endpoints)
    - [4.1. **Criação de Usuário**](#41-criação-de-usuário)
    - [`/user/signup`](#usersignup)
    - [Exemplo de Request:](#exemplo-de-request)
    - [Corpo da Requisição:](#corpo-da-requisição)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup)
    - [Exemplo de Response:](#exemplo-de-response)
    - [Possíveis Erros:](#possíveis-erros)
    - [4.2. **Login do usuário**](#42-login-do-usuário)
    - [`/user/signin`](#usersignin)
    - [Exemplo de Request:](#exemplo-de-request-1)
    - [Corpo da Requisição:](#corpo-da-requisição-1)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-1)
    - [Exemplo de Response:](#exemplo-de-response-1)
    - [Possíveis Erros:](#possíveis-erros-1)
    - [4.3. **Lista um usuário usando seu token como parâmetro**](#43-lista-um-usuário-usando-seu-token-como-parâmetro)
    - [`/user/me`](#userme)
    - [Exemplo de Request:](#exemplo-de-request-2)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição)
    - [Corpo da Requisição:](#corpo-da-requisição-2)
    - [Exemplo de Response:](#exemplo-de-response-2)
    - [Possíveis Erros:](#possíveis-erros-2)
    - [4.4. **Lista todos os fornecedores usando o token de login como parâmetro.**](#44-lista-todos-os-fornecedores-usando-o-token-de-login-como-parâmetro)
    - [`/user/suppliers`](#usersuppliers)
    - [Exemplo de Request:](#exemplo-de-request-3)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-1)
    - [Corpo da Requisição:](#corpo-da-requisição-3)
    - [Exemplo de Response:](#exemplo-de-response-3)
    - [Possíveis Erros:](#possíveis-erros-3)
    - [4.5. **Atualizar nome e email de um usuário.**](#45-atualizar-nome-e-email-de-um-usuário)
    - [`/user/me`](#userme-1)
    - [Exemplo de Request:](#exemplo-de-request-4)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-2)
    - [Corpo da Requisição:](#corpo-da-requisição-4)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-2)
    - [Exemplo de Response:](#exemplo-de-response-4)
    - [Possíveis Erros:](#possíveis-erros-4)
    - [4.6. **Atualizar senha de um usuário.**](#46-atualizar-senha-de-um-usuário)
    - [`/user/password`](#userpassword)
    - [Exemplo de Request:](#exemplo-de-request-5)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-3)
    - [Corpo da Requisição:](#corpo-da-requisição-5)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-3)
    - [Exemplo de Response:](#exemplo-de-response-5)
    - [Possíveis Erros:](#possíveis-erros-5)
    - [4.7. **Atualizar função de um usuário.**](#47-atualizar-função-de-um-usuário)
    - [`/user/role`](#userrole)
    - [Exemplo de Request:](#exemplo-de-request-6)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-4)
    - [Corpo da Requisição:](#corpo-da-requisição-6)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-4)
    - [Exemplo de Response:](#exemplo-de-response-6)
    - [Possíveis Erros:](#possíveis-erros-6)
    - [4.8. **Deletar um usuário.**](#48-deletar-um-usuário)
    - [`/user/me`](#userme-2)
    - [Exemplo de Request:](#exemplo-de-request-7)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-5)
    - [Corpo da Requisição:](#corpo-da-requisição-7)
    - [Exemplo de Response:](#exemplo-de-response-7)
    - [Possíveis Erros:](#possíveis-erros-7)
  - [5. **Candidates**](#5-candidates)
    - [Endpoints](#endpoints-1)
    - [5.1. **Solicitação da candidatura.**](#51-solicitação-da-candidatura)
    - [`/candidate`](#candidate)
    - [Exemplo de Request:](#exemplo-de-request-8)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-6)
    - [Corpo da Requisição:](#corpo-da-requisição-8)
    - [Exemplo de Response:](#exemplo-de-response-8)
    - [Possíveis Erros:](#possíveis-erros-8)
    - [5.2. **Listar todas as solicitações de candidatura.**](#52-listar-todas-as-solicitações-de-candidatura)
    - [`/candidate/job/:idJob`](#candidatejobidjob)
    - [Exemplo de Request:](#exemplo-de-request-9)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-7)
    - [Corpo da Requisição:](#corpo-da-requisição-9)
    - [Exemplo de Response:](#exemplo-de-response-9)
    - [Possíveis Erros:](#possíveis-erros-9)
    - [5.3. **Listar as solicitações de candidaturas de um usuário.**](#53-listar-as-solicitações-de-candidaturas-de-um-usuário)
    - [`/candidate/me`](#candidateme)
    - [Exemplo de Request:](#exemplo-de-request-10)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-8)
    - [Corpo da Requisição:](#corpo-da-requisição-10)
    - [Exemplo de Response:](#exemplo-de-response-10)
    - [Possíveis Erros:](#possíveis-erros-10)
    - [5.4. **Deletar uma solicitação de candidatura.**](#54-deletar-uma-solicitação-de-candidatura)
    - [`/candidate/job/:idJob`](#candidatejobidjob-1)
    - [Exemplo de Request:](#exemplo-de-request-11)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-9)
    - [Corpo da Requisição:](#corpo-da-requisição-11)
    - [Exemplo de Response:](#exemplo-de-response-11)
    - [Possíveis Erros:](#possíveis-erros-11)
  - [7. **JSON**](#7-json)

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

## 4. **Users**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo      | Tipo    | Descrição                         |
| ---------- | ------- | --------------------------------- |
| id         | string  | Identificador único do usuário    |
| name       | string  | O nome do usuário.                |
| email      | string  | O e-mail do usuário.              |
| password   | string  | A senha de acesso do usuário      |
| phone      | string  | O telefone do usuário             |
| isSupplier | boolean | Informa se o usuário é fornecedor |

### Endpoints

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

### 4.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/user/signup`

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

### 4.2. **Login do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/signin`

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

### 4.3. **Lista um usuário usando seu token como parâmetro**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/me`

### Exemplo de Request:

```
GET /user/me
Host: http://suaapi.com/v1 -- **MUDAR**
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

### 4.4. **Lista todos os fornecedores usando o token de login como parâmetro.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/suppliers`

### Exemplo de Request:

```
GET /user/suppliers
Host: http://suaapi.com/v1 -- **MUDAR**
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

### 4.5. **Atualizar nome e email de um usuário.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/me`

### Exemplo de Request:

```
PATCH /user/me
Host: http://suaapi.com/v1 -- **MUDAR**
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

### 4.6. **Atualizar senha de um usuário.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/password`

### Exemplo de Request:

```
PATCH /user/password
Host: http://suaapi.com/v1 -- **MUDAR**
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

### 4.7. **Atualizar função de um usuário.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/role`

### Exemplo de Request:

```
PATCH /user/role
Host: http://suaapi.com/v1 -- **MUDAR**
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

### 4.8. **Deletar um usuário.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/me`

### Exemplo de Request:

```
DELETE /user/me
Host: http://suaapi.com/v1 -- **MUDAR**
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

## 5. **Candidates**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo  | Tipo   | Descrição                                         |
| ------ | ------ | ------------------------------------------------- |
| id     | string | Identificador único da solicitação de candidatura |
| userId | string | Identificador único do usuário                    |
| jobId  | string | Identificado único da tarefa                      |

### Endpoints

| Método | Rota                  | Descrição                                                                                    |
| ------ | --------------------- | -------------------------------------------------------------------------------------------- |
| POST   | /candidate            | Solicitação da candidatura.                                                                  |
| GET    | /candidate/job/:idJob | Listar todas as solicitações de candidatura.                                                 |
| GET    | /candidate/me         | Listar as solicitações de candidaturas de um usuário usando o token de login como parâmetro. |
| DELETE | /candidate/job/:idJob | Deletar uma solicitação de candidatura.                                                      |

---

### 5.1. **Solicitação da candidatura.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/candidate`

### Exemplo de Request:

```
POST /candidate
Host: http://suaapi.com/v1 -- **MUDAR**
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
  "jobId": "7cdade61-0c0e-45fa-8f75-2e387779ef1b"
}
```

### Exemplo de Response:

```
201 CREATED
```

```json
{
  "id": "c0a22dfe-c3d0-4a9e-b4f7-3ea579539b05",
  "userId": "c6b21ba1-395c-4f05-afaa-1da6a03b1dd2",
  "jobId": "7cdade61-0c0e-45fa-8f75-2e387779ef1b"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

### 5.2. **Listar todas as solicitações de candidatura.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/candidate/job/:idJob`

### Exemplo de Request:

```
POST /candidate/job/:idJob
Host: http://suaapi.com/v1 -- **MUDAR**
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
  "candidatesQuantity": 1,
  "candidates": [
    {
      "id": "c0a22dfe-c3d0-4a9e-b4f7-3ea579539b05",
      "userId": "c6b21ba1-395c-4f05-afaa-1da6a03b1dd2",
      "jobId": "7cdade61-0c0e-45fa-8f75-2e387779ef1b"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

### 5.3. **Listar as solicitações de candidaturas de um usuário.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/candidate/me`

### Exemplo de Request:

```
POST /candidate/me
Host: http://suaapi.com/v1 -- **MUDAR**
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
  "candidacysQuantity": "you have 2 applications for service(s)",
  "candidacys": [
    {
      "id": "c0a22dfe-c3d0-4a9e-b4f7-3ea579539b05",
      "userId": "c6b21ba1-395c-4f05-afaa-1da6a03b1dd2",
      "jobId": "7cdade61-0c0e-45fa-8f75-2e387779ef1b"
    },
    {
      "id": "5d4f9fc7-4d4c-43bc-9617-739090118f61",
      "userId": "c6b21ba1-395c-4f05-afaa-1da6a03b1dd2",
      "jobId": "e34a4115-5d3e-4ab8-aa71-3b9f7ba35b44"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

### 5.4. **Deletar uma solicitação de candidatura.**

[ Voltar aos Endpoints ](#5-endpoints)

### `/candidate/job/:idJob`

### Exemplo de Request:

```
DELETE /candidate/job/:idJob
Host: http://suaapi.com/v1 -- **MUDAR**
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
  "message": "Deleted candidacy"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Unauthorized. |

## 7. **JSON**

[ Voltar para os Endpoints ](#5-endpoints)

```json
![JSON:](json-example.json)
```
