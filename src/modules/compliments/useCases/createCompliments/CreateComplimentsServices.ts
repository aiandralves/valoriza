import { inject, injectable } from 'tsyringe';

import { IComplimentsReposiotry } from '@modules/compliments/repositories/IComplimentsRepository';
import { Compliment } from '@modules/compliments/typeorm/entities/Compliment';
import { ComplimentsDTO } from '@modules/compliments/dtos/ComplimentsDTO';

@injectable()
export class CreateComplimentsServices {
    constructor(
        @inject('ComplimentsRepository')
        private complimentsRepository: IComplimentsReposiotry
    ) {}

    async execute({
        tag_id,
        user_sender,
        user_receiver,
        message,
    }: ComplimentsDTO): Promise<Compliment> {
        if (user_sender === user_receiver) {
            throw new Error('Incorrect user receiver!');
        }

        const userReceiverExists =
            await this.complimentsRepository.findByIdUser(user_receiver);

        if (!userReceiverExists) {
            throw new Error('User Receiver does not exists!');
        }

        const compliment = await this.complimentsRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message,
        });

        return compliment;
    }
}
