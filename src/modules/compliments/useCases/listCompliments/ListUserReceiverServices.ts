import { inject, injectable } from 'tsyringe';

import { IComplimentsReposiotry } from '@modules/compliments/repositories/IComplimentsRepository';
import { Compliment } from '@modules/compliments/typeorm/entities/Compliment';

@injectable()
export class ListUserReceiverServices {
    constructor(
        @inject('ComplimentsRepository')
        private complimentsRepository: IComplimentsReposiotry
    ) {}

    async execute(iduser: string): Promise<Compliment[]> {
        const compliments = await this.complimentsRepository.findByUserReceiver(
            iduser
        );

        return compliments;
    }
}
