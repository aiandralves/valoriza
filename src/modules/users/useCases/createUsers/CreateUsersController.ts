import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUsersServices } from './CreateUsersServices';

export class CreateUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password, admin } = req.body;

        const usersCreate = container.resolve(CreateUsersServices);

        const user = await usersCreate.execute({
            name,
            email,
            password,
            admin,
        });

        return res.json(user);
    }
}
