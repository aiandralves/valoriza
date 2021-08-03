import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserSenderServices } from './ListUserSenderServices';

export class ListUserSenderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user;

        const complimentSender = container.resolve(ListUserSenderServices);

        const compliment = await complimentSender.execute(id);

        return res.json(compliment);
    }
}
