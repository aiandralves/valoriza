import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserReceiverServices } from './ListUserReceiverServices';

export class ListUserReceiverController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user;

        const complimentReceiver = container.resolve(ListUserReceiverServices);

        const compliment = await complimentReceiver.execute(id);

        return res.json(compliment);
    }
}
