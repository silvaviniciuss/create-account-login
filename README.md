<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-a-api">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
</p>

## 💻 Sobre o projeto

Projeto API de criação e login de usuários.

---

## ⚙️ Funcionalidades
 API disponibiliza os seguintes endpoints de conexão com o banco de dados:
  - [x] Signup - requisição de cadastro de usuários.
  - [x] Login - requisição de login de usuários.
---

## 🚀 Como executar a api

### Configuração do Banco de Dados

### Pré-requisitos
- [MySQL] - Extensão do VSCode para códigos em SQL.

# Criação de tabelas no banco de dados
```
CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        nickname TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        created_at TEXT DEFAULT (DATETIME()) NOT NULL
    );

```
Executar cada um dos códigos acima presente no arquivo create-account-login.sql na pasta database.

### Pré-requisitos
Ferramentas que devem ser instaladas para a correta execução da API:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/downloads/) ou a sua versão WEB [PostmanWeb](https://web.postman.co)

Ferramenta para edição de códigos:
- [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando a API

Utilizar os seguintes comandos:
```bash

# Clone este repositório
$ git clone https://github.com/silvaviniciuss/create-account-login

# Acesse a pasta do projeto no terminal/cmd
$ cd create-account-login

# Para abrir o vsCode
$ code .

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3003 

```

Referencie a documentação da [API](https://documenter.getpostman.com/view/27681045/2s9Xy5LVoc).

### Requisições
```
'http://localhost:3003/'

```

#### Signup
```
http://localhost:3003/signup
```
Necessário informar os seguintes dados para cadastro:
```
{
    "nickname": "bandreid",
    "email": "vinicius@email.com",
    "password": "123456"
}
```

Retorna um token .
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVkNDcyOTUyLTFmN2QtNDU4MC1iMTBmLWRlNGQ3MDkzOWUzNCIsIm5hbWUiOiJWaW5pY2l1cyBkYSBTaWx2YSIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2OTE4NjI1NDYsImV4cCI6MTY5MjQ2NzM0Nn0.EuOmBVhK7m6hvzN5aWZioW0qAJ1TcDLv75JDvL7rXZ4",
    nickname: "bandreid"
}
```
Funções adicionais:
- Geração de ID automático.
- Senha (password) Hasheada

#### Login
```
http://localhost:3003/users/login
```
Retorna um token:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4MzNmM2JkLWE3MzUtNGY2NC04YTNkLTAzNDA2YzE2N2U2MyIsIm5hbWUiOiJEYW5pZWxpIEguIEZlcnJlaXJhIiwicm9sZSI6Ik5PUk1BTCIsImlhdCI6MTY5MTg2MjY0NywiZXhwIjoxNjkyNDY3NDQ3fQ.AY3pD8T0toBcRF5XXWMPyve9XEVKvG-rsrswWTBw5Og",
    nickname: "bandreid"
}
```

## 🛠 Tecnologias

Ferramentas utilizadas no desenvolvimento do projeto:

-   [NodeJS](https://nodejs.org/en/) - software que permite a execução de JS fora de um navegador WEB.
-   [CORS](https://expressjs.com/en/resources/middleware/cors.html) - biblioteca que permite enviar requisições de uma página hospedada localmente.
-   [APIs & Express](https://expressjs.com/pt-br/) - framework de recursos para impletar funcionalidades em APIs.
-   [TypeScript](https://www.typescriptlang.org/) - linguagem de programação que adiciona tipagem estática ao JS.
-   [ts-node](https://github.com/TypeStrong/ts-node) - ferramenta de compilação de projetos TypeScript.
-   [SQLite](https://github.com/mapbox/node-sqlite3) - banco de dados.
-   [Knex](https://knexjs.org/guide/query-builder.html) - permite que os códigos SQL sejam mais estruturados.
-   [UUID]() - Uuid na versão 4 para geração de IDs.
-   [Env]() - Configuração de variáveis de ambiente.
-   [Json Web Token](https://jwt.io/) - Geração de tokens de acesso.
-   [Bcrypt](https://www.npmjs.com/package/bcrypt) - Senha criptografadas (hash)
