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
  "title": "Formatar um computador velho.",
  "description": "Preciso de alguem que consiga formatar meu computador e instalar o windows 11 nele.",
  "cep": "12345-123",
  "deliveryDate": "2022-07-21",
  "category": 5
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
  "newJob": {
    "id": "b7944a9e-b17e-4c05-87b5-ac32b8401c21",
    "title": "Formatar um computador velho.",
    "description": "Preciso de alguem que consiga formatar meu computador e instalar o windows 11 nele.",
    "deliveryDate": "2022-07-21T00:00:00.000Z",
    "cep": "12345-123",
    "status": "available",
    "userId": "250bbb89-38b4-4239-b7c5-df69e6d5d158",
    "reviewId": null,
    "categoryId": 5
  }
}
```

### Possiveis erros de requisicao:

| Código do Erro  | Descrição        |
| --------------- | ---------------- |
| 400 Bad Request | Key is required. |
