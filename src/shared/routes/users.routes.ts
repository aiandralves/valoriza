import { Router } from 'express';

import { CreateUsersController } from '@modules/users/useCases/createUsers/CreateUsersController';
import { ListUsersController } from '@modules/users/useCases/listUsers/ListUsersController';

export const usersRouter = Router();

const createUsers = new CreateUsersController();
const listUsers = new ListUsersController();

usersRouter.post('/', createUsers.handle);
usersRouter.get('/', listUsers.handle);
