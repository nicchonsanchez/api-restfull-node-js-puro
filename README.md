# 🚀 API RESTful (CRUD) em Node.js Puro

**Status:** Concluído
Projeto desenvolvido para demonstrar o domínio dos **fundamentos do Node.js**, com a construção de uma aplicação *backend* completa **sem a utilização de *frameworks*** de terceiros (como Express ou Fastify).


## 💻 Tecnologias

* **Node.js**
* **Módulos Nativos:** `node:http`, `node:fs/promises`, `node:crypto`
* **Padrão:** RESTful


## ✨ Destaques da Arquitetura

* **Roteamento Customizado:** Implementação de um sistema de roteamento manual (`server.js`) que lida com o *matching* de rotas dinâmicas.
* **Parser de URL:** Utilização de **Expressões Regulares** (`build-route-path.js`) para extrair e nomear de forma limpa os parâmetros de rota e *query strings*.
* **Persistência de Dados (CRUD):** Uso do módulo `node:fs/promises` para simular uma base de dados, salvando e manipulando os registros em um arquivo JSON (`db.json`).
* **Princípios RESTful:** Conformidade com os métodos HTTP para as operações **CRUD** (`Create`, `Read`, `Update`, `Delete`).


## ⚙️ Rotas Disponíveis

Todas as rotas são baseadas no recurso `/users`.

| Método HTTP | Endpoint | Descrição | Corpo da Requisição (Body) |
| :---: | :--- | :--- | :--- |
| **GET** | `/users` | Lista todos os usuários. Permite filtro por `?search=...`. | - |
| **POST** | `/users` | Cria um novo usuário. | `{ "name": "...", "email": "...", "age": ... }` |
| **PUT** | `/users/:id` | Atualiza um usuário existente. | `{ "name": "...", "email": "...", "age": ... }` |
| **DELETE** | `/users/:id` | Deleta um usuário específico. | - |



## 🛠️ Como Executar

1.  Instale as dependências:
    ```bash
    npm install 
    # ou yarn install
    ```
2.  Inicie o servidor:
    ```bash
    npm run dev 
    # ou yarn dev (se configurado)
    ```
O servidor estará rodando em `http://localhost:3333`.
