# CRUD de Tarefas com Node.js

Projeto simples usando Node.js, Express e Mongoose.

## Estrutura

```text
src/
├── controllers/
│   └── taskController.js
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
└── server.js

npm install
cp .env.example .env
npm run dev

Método,Rota,Ação
GET,/api/tasks,Lista tarefas
GET,/api/tasks/:id,Busca uma tarefa
POST,/api/tasks,Cria uma tarefa
PUT,/api/tasks/:id,Atualiza uma tarefa
DELETE,/api/tasks/:id,Exclui uma tarefa

{
  "titulo": "Estudar PWA",
  "descricao": "Finalizar atividade prática do curso",
  "concluida": false
}

