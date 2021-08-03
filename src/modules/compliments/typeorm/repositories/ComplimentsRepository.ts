import { getRepository, Repository } from 'typeorm';

import { Compliment } from '../entities/Compliment';
import { IComplimentsReposiotry } from '@modules/compliments/repositories/IComplimentsRepository';
import { ComplimentsDTO } from '@modules/compliments/dtos/ComplimentsDTO';
import { User } from '@modules/users/typeorm/entities/User';

export class ComplimentsRepository implements IComplimentsReposiotry {
    private repository: Repository<Compliment>;
    private repositoryUser: Repository<User>;

    constructor() {
        this.repository = getRepository(Compliment);
        this.repositoryUser = getRepository(User);
    }

    async findByIdUser(user_receiver: string): Promise<User> {
        const userReceiver = await this.repositoryUser.findOne(user_receiver);

        return userReceiver;
    }

    async findByUserReceiver(iduser: string): Promise<Compliment[]> {
        const complimentReceiver = await this.repository.find({
            where: {
                user_receiver: iduser,
            },
        });

        return complimentReceiver;
    }

    async findByUserSender(iduser: string): Promise<Compliment[]> {
        const complimentSender = await this.repository.find({
            where: {
                user_sender: iduser,
            },
        });

        return complimentSender;
    }

    async create({
        user_sender,
        user_receiver,
        tag_id,
        message,
    }: ComplimentsDTO): Promise<Compliment> {
        const compliment = this.repository.create({
            user_sender,
            user_receiver,
            tag_id,
            message,
        });

        await this.repository.save(compliment);

        return compliment;
    }
}
