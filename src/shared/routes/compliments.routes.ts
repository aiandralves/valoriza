import { Router } from 'express';

import { ensureAuth } from '@shared/middlewares/ensureAuth';
import { CreateComplimentsController } from '@modules/compliments/useCases/createCompliments/CreateComplimentsController';
import { ListUserReceiverController } from '@modules/compliments/useCases/listCompliments/ListUserReceiverController';
import { ListUserSenderController } from '@modules/compliments/useCases/listCompliments/ListUserSenderController';

export const complimentsRouter = Router();

const createCompliment = new CreateComplimentsController();
const listUserReceiver = new ListUserReceiverController();
const listUserSender = new ListUserSenderController();

complimentsRouter.post('/', ensureAuth, createCompliment.handle);

complimentsRouter.get('/users/receiver', ensureAuth, listUserReceiver.handle);

complimentsRouter.get('/users/sender', ensureAuth, listUserSender.handle);
