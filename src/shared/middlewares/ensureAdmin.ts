import { UsersRepository } from '@modules/users/typeorm/repositories/UsersRepository';
import { Request, Response, NextFunction } from 'express';

export async function ensureAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { id } = req.user;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if (!user.admin) {
        throw new Error("User isn't admin!");
    }

    return next();
}
