import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Retornar uma lista de items
routes.get('/items', itemsController.index);

// Criação do ponto de coleta no banco de dados
routes.post('/points', pointsController.create);

routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes;