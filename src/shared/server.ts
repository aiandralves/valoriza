import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import { routes } from '@shared/routes';

import swaggerDocs from './swagger.json';

import '@shared/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});

app.listen(3333, () => console.log('🚀 Server started on port 3333!!!'));
