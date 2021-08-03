import { inject, injectable } from 'tsyringe';

import { IComplimentsReposiotry } from '@modules/compliments/repositories/IComplimentsRepository';
import { Compliment } from '@modules/compliments/typeorm/entities/Compliment';

@injectable()
export class ListUserSenderServices {
    constructor(
        @inject('ComplimentsRepository')
        private complimentsRepository: IComplimentsReposiotry
    ) {}

    async execute(iduser: string): Promise<Compliment[]> {
        const compliments = await this.complimentsRepository.findByUserSender(
            iduser
        );

        return compliments;
    }
}
