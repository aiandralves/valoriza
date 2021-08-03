import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { IUsersRespository } from '@modules/users/repositories/IUsersRespository';
import auth from '@config/auth';

interface IUsers {
    email: string;
    password: string;
}

@injectable()
export class AuthenticateUserServices {
    constructor(
        @inject('UsersRepository')
        private usersReposiory: IUsersRespository
    ) {}

    async execute({ email, password }: IUsers) {
        const user = await this.usersReposiory.findByEmail(email);

        if (!user) {
            throw new Error('Email or Password incorrect!');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Email or Password incorrect!');
        }

        const token = sign({ email: user.email }, auth.secretToken, {
            subject: user.id,
            expiresIn: auth.expiresToken,
        });

        return token;
    }
}
