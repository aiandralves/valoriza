import { UsersDTO } from '../dtos/UsersDTO';
import { User } from '../typeorm/entities/User';

export interface IUsersRespository {
    findByEmail(email: string): Promise<User>;

    list(): Promise<User[]>;

    create(data: UsersDTO): Promise<User>;
}
