import { Router } from 'express';

import { usersRouter } from './users.routes';
import { tagsRouter } from './tags.routes';
import { sessionsRouter } from './sessions.routes';
import { complimentsRouter } from './compliments.routes';

export const routes = Router();

routes.use('/users', usersRouter);
routes.use('/tags', tagsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/compliments', complimentsRouter);
