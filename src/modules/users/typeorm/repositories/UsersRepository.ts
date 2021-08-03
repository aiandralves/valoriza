import { getRepository, Repository } from 'typeorm';

import { IUsersRespository } from '@modules/users/repositories/IUsersRespository';
import { User } from '../entities/User';
import { UsersDTO } from '@modules/users/dtos/UsersDTO';

export class UsersRepository implements IUsersRespository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async findByEmail(email: string): Promise<User> {
        const userEmail = await this.repository.findOne({ email });

        return userEmail;
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();

        return users;
    }

    async create({ name, email, password, admin }: UsersDTO): Promise<User> {
        const user = this.repository.create({
            name,
            email,
            password,
            admin,
        });

        await this.repository.save(user);

        return user;
    }
}
