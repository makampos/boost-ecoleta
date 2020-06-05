import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path'

const app = express();

app.use(cors());
app.use(express.json()); // Permite que o express entenda o corpo da requisição em formato Json
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users = Buscar dados do usuário com ID 

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
    //ex: Buscar um unico usuário 
    //    deletar um unico usuário


// Query Param:  Parâmetros que vem na própia rota geralmente opcionais para filtros, paginação etc
// Request Body: Parâmetros para criação e atualização de informações




app.listen(3333);