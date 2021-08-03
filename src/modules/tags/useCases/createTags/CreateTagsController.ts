import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTagsServices } from './CreateTagsSevices';

export class CreateTagsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;

        const createTag = container.resolve(CreateTagsServices);

        const tag = await createTag.execute(name);

        return res.json(tag);
    }
}
