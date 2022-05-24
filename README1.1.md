<!--
    Documento reservado para documentacao das rotas:
        3 - Jobs
        4 - Review
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
  - [6 Jobs](#6-jobs)
    - [Endpoints](#endpoints)
  - [6.1 Criacao de um servico](#61-criacao-de-um-servico)
    - [/job/](#job)
    - [Exemplo de request:](#exemplo-de-request)
    - [Corpo da requisicao:](#corpo-da-requisicao)
    - [Schema de validacao com Yup:](#schema-de-validacao-com-yup)
    - [Exemplo de response:](#exemplo-de-response)
    - [Possiveis erros de requisicao:](#possiveis-erros-de-requisicao)
  - [6.2 Listagem dos meus servicos:](#62-listagem-dos-meus-servicos)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição)
    - [Corpo da Requisição:](#corpo-da-requisição)
    - [Exemplo de Response:](#exemplo-de-response-1)
    - [Possiveis erros:](#possiveis-erros)
  - [6.3 Listagem de todos os jobs](#63-listagem-de-todos-os-jobs)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-1)
    - [Corpo da Requisição:](#corpo-da-requisição-1)
    - [Exemplo de Response:](#exemplo-de-response-2)
    - [Possiveis erros:](#possiveis-erros-1)
  - [6.4 Listagem de um job especifico pelo id.](#64-listagem-de-um-job-especifico-pelo-id)
    - [Parâmetros da Requisição:](#parâmetros-da-requisição-2)
    - [Corpo da Requisição:](#corpo-da-requisição-2)
    - [Exemplo de Response:](#exemplo-de-response-3)
    - [Possiveis erros:](#possiveis-erros-2)
  - [6.5 Atualizacao das informacoes do job:](#65-atualizacao-das-informacoes-do-job)
    - [Corpo da Requisição:](#corpo-da-requisição-3)
    - [Exemplo de Response:](#exemplo-de-response-4)
    - [Possiveis erros:](#possiveis-erros-3)
  - [6.6 Atualizacao do candidato ao job:](#66-atualizacao-do-candidato-ao-job)
    - [Corpo da Requisição:](#corpo-da-requisição-4)
    - [Exemplo de Response:](#exemplo-de-response-5)
    - [Possiveis erros:](#possiveis-erros-4)
  - [6.7 Atualizacao para remover o supplier:](#67-atualizacao-para-remover-o-supplier)
    - [Corpo da Requisição:](#corpo-da-requisição-5)
    - [Exemplo de Response:](#exemplo-de-response-6)
    - [Possiveis erros:](#possiveis-erros-5)
  - [6.8 Atualizacao para finalizar o servico:](#68-atualizacao-para-finalizar-o-servico)
    - [Corpo da Requisição:](#corpo-da-requisição-6)
    - [Exemplo de Response:](#exemplo-de-response-7)
    - [Possiveis erros:](#possiveis-erros-6)
    - [6.9 Delete do job:](#69-delete-do-job)
    - [Corpo da Requisição:](#corpo-da-requisição-7)
    - [Exemplo de Response:](#exemplo-de-response-8)

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

## 6 Jobs

O objeto jobs e definido como:

| Campo        | Tipo   | Descrição                                |
| ------------ | ------ | ---------------------------------------- |
| title        | string | titulo do trabalho requisitado           |
| description  | string | descricao do servico requisitado         |
| cep          | string | cep de onde o servico sera feito         |
| deliveryDate | string | data prevista para realizacao do servico |
| category     | string | id da categoria do servico               |

### Endpoints

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

## 6.1 Criacao de um servico

### /job/

### Exemplo de request:

```
POST /post
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

## 6.2 Listagem dos meus servicos:

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

## 6.3 Listagem de todos os jobs

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

## 6.4 Listagem de um job especifico pelo id.

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

## 6.5 Atualizacao das informacoes do job:

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

## 6.6 Atualizacao do candidato ao job:

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

## 6.7 Atualizacao para remover o supplier:

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

## 6.8 Atualizacao para finalizar o servico:

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

### 6.9 Delete do job:

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

| Código do Erro     | Descrição      |
| ------------------ | -------------- |
| 401 Unauthorized   | Unauthorized.  |
| 500 QUERBRA PAGINA | QUERBRA PAGINA |
