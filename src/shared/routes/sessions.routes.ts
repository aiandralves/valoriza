import { Router } from 'express';

import { AuthenticateUserController } from '@modules/users/useCases/authenticateUser/AuthenticateUserController';

export const sessionsRouter = Router();

const createAuth = new AuthenticateUserController();

sessionsRouter.post('/', createAuth.handle);
