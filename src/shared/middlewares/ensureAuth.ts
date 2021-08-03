import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '@config/auth';

interface IPayload {
    sub: string;
}

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(' ');

    try {
        const { sub: iduser } = verify(token, auth.secretToken) as IPayload;

        req.user = {
            id: iduser,
        };

        return next();
    } catch (err) {
        return res.status(401).end();
    }
}
