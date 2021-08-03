import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTagsServices } from './ListTagsServices';

export class ListTagsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listTags = container.resolve(ListTagsServices);

        const tags = await listTags.execute();

        return res.json(tags);
    }
}
