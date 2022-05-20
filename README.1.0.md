<!--
    Documento reservado para documentacao das rotas:
        - 1 - User
        - 2 - Candidates
 -->

## 1. **Users**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo    | Tipo    | Descrição                                    |
| -------- | ------- | -------------------------------------------- |
| id       | string  | Identificador único do usuário               |
| name     | string  | O nome do usuário.                           |
| email    | string  | O e-mail do usuário.                         |
| password | string  | A senha de acesso do usuário                 |
| isAdm    | boolean | Define se um usuário é Administrador ou não. |

### Endpoints

| Método | Rota            | Descrição                                     |
| ------ | --------------- | --------------------------------------------- |
| POST   | /users          | Criação de um usuário.                        |
| GET    | /users          | Lista todos os usuários                       |
| GET    | /users/:user_id | Lista um usuário usando seu ID como parâmetro |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
POST /users
Host: http://suaapi.com/v1
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "eDuArDo",
  "email": "edu@mail.com",
  "password": "1234",
  "isAdm": true
}
```

### Schema de Validação com Yup:

```javascript
name: yup
        .string()
	.required()
	.transform((value, originalValue) => {
		return titlelify(originalValue)
	}),
email: yup
        .string()
	.email()
	.required()
	.transform((value, originalValue) => {
		return originalValue.toLowerCase()
	}),
password: yup
        .string()
	.required()
	.transform((value, originalValue) => {
		return bcrypt.hashSync(originalValue, 10)
	}),
isAdm: yup
        .boolean()
	.required(),
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
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

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

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
