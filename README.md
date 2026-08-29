# Estabelecimento NA

Aplicação simples em Node.js/Express para cadastro e consulta de estabelecimentos, com views renderizadas em EJS. Dados mantidos em memória (sem banco de dados).

## Tecnologias

- Node.js
- Express 5
- EJS
- Nodemon

## Como rodar

```bash
npm install
npm start
```

O servidor sobe em `http://localhost:3001`.

## Rotas

| Método | Rota                          | Descrição                          |
|--------|-------------------------------|-------------------------------------|
| GET    | `/`                            | Lista estabelecimentos (filtro opcional por `mediaValor`) |
| GET    | `/estabelecimento/:nome`       | Busca estabelecimento pelo nome     |
| POST   | `/estabelecimento`             | Cria um novo estabelecimento        |
| PUT    | `/estabelecimento/:id`         | Atualiza um estabelecimento         |
| DELETE | `/estabelecimento/:id`         | Remove um estabelecimento           |

## Estrutura

```
controllers/   # lógica das rotas
routes/        # definição das rotas Express
views/         # templates EJS
index.js       # entrada da aplicação
```
