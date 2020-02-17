import { Router } from 'express';
import multer from 'multer';

import avatarMulterConfig from './config/multer/avatar';
import signatureMulterConfig from './config/multer/signature';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import AvatarController from './app/controllers/AvatarController';
import DeliverymanController from './app/controllers/DeliverymanController';
import signatureController from './app/controllers/SignatureController';
import DeliveryController from './app/controllers/DeliveryController';
import GetDeliveriesPendingController from './app/controllers/GetDeliveriesPendingController';
import GetDeliveriesFinishedController from './app/controllers/GetDeliveriesFinishedController';
import TakeDeliveryController from './app/controllers/TakeDeliveryController';
import FinalizeDeliveryController from './app/controllers/FinalizeDeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploadAvatar = multer(avatarMulterConfig);
const uploadSigature = multer(signatureMulterConfig);

/** ROTAS SEM AUTENTICAÇÃO */
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get(
  '/deliveryman/:id/deliveries/pending',
  GetDeliveriesPendingController.index
);
routes.get(
  '/deliveryman/:id/deliveries/finished',
  GetDeliveriesFinishedController.index
);

/** rota para retirada de encomendas */
routes.put(
  '/deliveryman/:id/deliveries/:delivery_id/takeDelivery',
  TakeDeliveryController.update
);

/** rota para finalizar uma entrega */
routes.put(
  '/deliveryman/:id/deliveries/:delivery_id/finalizeDelivery',
  FinalizeDeliveryController.update
);
/** rota para upload de uma imagem de assinatura de entrega */
routes.post(
  '/signatures',
  uploadSigature.single('file'),
  signatureController.store
);

/** rota para cadastrar um novo problema de entrega */
routes.post(
  '/deliveryman/:id/delivery/:delivery_id/problems',
  DeliveryProblemController.store
);

/** ROTAS COM AUTENTICAÇÃO */
routes.use(authMiddleware);
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

routes.get('/deliveries', DeliveryController.index);
routes.get('/deliveries/:id', DeliveryController.show);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

routes.post('/avatars', uploadAvatar.single('file'), AvatarController.store);

export default routes;
