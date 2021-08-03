import { inject, injectable } from 'tsyringe';

import { IUsersRespository } from '@modules/users/repositories/IUsersRespository';
import { User } from '@modules/users/typeorm/entities/User';

@injectable()
export class ListUsersServices {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRespository
    ) {}

    async execute(): Promise<User[]> {
        const users = await this.usersRepository.list();

        return users;
    }
}
