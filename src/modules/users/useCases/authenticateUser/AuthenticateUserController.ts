import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserServices } from './AuthenticateUserServices';

export class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authService = container.resolve(AuthenticateUserServices);

        const token = await authService.execute({
            email,
            password,
        });

        return res.json(token);
    }
}
