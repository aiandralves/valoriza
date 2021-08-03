import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateComplimentsServices } from './CreateComplimentsServices';

export class CreateComplimentsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { tag_id, user_receiver, message } = req.body;
        const { id } = req.user;

        const createCompliment = container.resolve(CreateComplimentsServices);

        const compliment = await createCompliment.execute({
            tag_id,
            user_sender: id,
            user_receiver,
            message,
        });

        return res.json(compliment);
    }
}
