import { ComplimentsDTO } from '../dtos/ComplimentsDTO';
import { Compliment } from '../typeorm/entities/Compliment';
import { User } from '@modules/users/typeorm/entities/User';

export interface IComplimentsReposiotry {
    findByIdUser(user_receiver: string): Promise<User>;

    findByUserReceiver(iduser: string): Promise<Compliment[]>;

    findByUserSender(iduser: string): Promise<Compliment[]>;

    create(data: ComplimentsDTO): Promise<Compliment>;
}
