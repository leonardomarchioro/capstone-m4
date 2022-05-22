<!--
    Documento reservado para documentacao das rotas:
        - 1 - User
        - 2 - Candidates
 -->

## 1. **Users**

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

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

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

OBS.: Chaves não presentes no schema serão removidas.

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

### 1.2. **Login do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/signin`

---

### 1.2. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Host: http://suaapi.com/v1
Authorization: None
Content-type: application/json
```

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
    "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
    "name": "Eduardo",
    "email": "edu@mail.com",
    "isAdm": true
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **Listar Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:user_id`

### Exemplo de Request:

```
GET /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: http://suaapi.com/v1
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

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
  "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
  "name": "Eduardo",
  "email": "edu@mail.com",
  "isAdm": true
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not Found  | User not found. |
