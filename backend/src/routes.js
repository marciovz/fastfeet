import { Router } from 'express';
import multer from 'multer';

import avatarMulterConfig from './config/multer/avatar';
import signatureMulterConfig from './config/multer/signature';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SessionDeliverymanController from './app/controllers/SessionDeliverymanController';
import RecipientController from './app/controllers/RecipientController';
import AvatarController from './app/controllers/AvatarController';
import DeliverymanController from './app/controllers/DeliverymanController';
import signatureController from './app/controllers/SignatureController';
import DeliveryController from './app/controllers/DeliveryController';
import GetDeliveriesPendingController from './app/controllers/GetDeliveriesPendingController';
import GetDeliveriesFinishedController from './app/controllers/GetDeliveriesFinishedController';
import GetDeliveryByDeliveryIdController from './app/controllers/GetDeliveryByDeliveryIdController';
import TakeDeliveryController from './app/controllers/TakeDeliveryController';
import FinalizeDeliveryController from './app/controllers/FinalizeDeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import DeliveryProblemPendentController from './app/controllers/GetDeliveryProblemPendentController';
import DeliveryProblemByDeliveryController from './app/controllers/DeliveryProblemByDeliveryController';


import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploadAvatar = multer(avatarMulterConfig);
const uploadSignature = multer(signatureMulterConfig);

/** ROTAS SEM AUTENTICAÇÃO */
routes.post('/sessions', SessionController.store);
routes.post('/sessionsDeliveryman', SessionDeliverymanController.store);

/** ROTAS PARA LISTAGEM DE ENTREGAS PENDENTES DE UM ENTREGADOR */
routes.get(
  '/deliveryman/:id/deliveries/pending',
  GetDeliveriesPendingController.index
);
/** ROTAS PARA LISTAGEM DE ENTREGAS FINALIZADAS DE UM ENTREGADOR */
routes.get(
  '/deliveryman/:id/deliveries/finished',
  GetDeliveriesFinishedController.index
);
/** ROTAS PARA BUSCA DE UMA ENTREGA DE UM ENTREGADOR */
routes.get(
  '/deliveryman/:deliverymanId/delivery/:deliveryId/findOne',
  GetDeliveryByDeliveryIdController.show
);

/** rota para finalizar uma entrega */
routes.put(
  '/deliveryman/:id/delivery/:delivery_id/finalizeDelivery',
  FinalizeDeliveryController.update
);
/** rota para upload de uma imagem de assinatura de entrega */
routes.post(
  '/signatures',
  uploadSignature.single('file'),
  signatureController.store
);

/** rota para cadastrar um novo problema de entrega */
routes.post(
  '/deliveryman/:deliverymanId/delivery/:deliveryId/problems',
  DeliveryProblemByDeliveryController.store
);

/** Rota para listar problemas de uma entrega*/
routes.get(
  '/deliveryman/:deliverymanId/delivery/:deliveryId/problems',
  DeliveryProblemByDeliveryController.index
);

/** ROTAS COM AUTENTICAÇÃO */
routes.use(authMiddleware);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.get('/deliverymans', DeliverymanController.index);
routes.get('/deliverymans/:id', DeliverymanController.show);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

routes.get('/deliveries/problem', DeliveryProblemController.index);
routes.get('/deliveries/:id/problem', DeliveryProblemController.show);
routes.put('/deliveries/:id/problem/cancel', DeliveryProblemController.update);
routes.get(
  '/deliveries/problem/pendent',
  DeliveryProblemPendentController.index
);

routes.get('/deliveries', DeliveryController.index);
routes.get('/deliveries/:id', DeliveryController.show);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

/** rota para retirada de encomendas */
routes.put(
  '/deliveryman/:deliveryman_id/delivery/:delivery_id/takeDelivery',
  TakeDeliveryController.update
);


routes.post('/avatars', uploadAvatar.single('file'), AvatarController.store);

export default routes;
