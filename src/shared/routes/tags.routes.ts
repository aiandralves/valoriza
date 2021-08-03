import { Router } from 'express';

import { ensureAuth } from '@shared/middlewares/ensureAuth';
import { ensureAdmin } from '@shared/middlewares/ensureAdmin';
import { CreateTagsController } from '@modules/tags/useCases/createTags/CreateTagsController';
import { ListTagsController } from '@modules/tags/useCases/listTags/ListTagsController';

export const tagsRouter = Router();

const createTags = new CreateTagsController();
const listTags = new ListTagsController();

tagsRouter.post('/', ensureAuth, ensureAdmin, createTags.handle);
tagsRouter.get('/', ensureAuth, listTags.handle);
