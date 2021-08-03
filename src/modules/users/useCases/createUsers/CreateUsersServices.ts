import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import { IUsersRespository } from '@modules/users/repositories/IUsersRespository';
import { UsersDTO } from '@modules/users/dtos/UsersDTO';
import { User } from '@modules/users/typeorm/entities/User';

@injectable()
export class CreateUsersServices {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRespository
    ) {}

    async execute({ name, email, password, admin }: UsersDTO): Promise<User> {
        if (!email) {
            throw new Error('User incorrect!');
        }

        const userExists = await this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new Error('User already exists!');
        }

        const passwordHash = await hash(password, 8);

        const user = await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            admin,
        });

        return user;
    }
}
