import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersServices } from './ListUsersServices';

export class ListUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listUsers = container.resolve(ListUsersServices);

        const users = await listUsers.execute();

        return res.json(users);
    }
}
