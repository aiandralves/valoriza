import { inject, injectable } from 'tsyringe';

import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { Tag } from '@modules/tags/typeorm/entities/Tag';

@injectable()
export class CreateTagsServices {
    constructor(
        @inject('TagsRepository')
        private tagsRepository: ITagsRepository
    ) {}

    async execute(name: string): Promise<Tag> {
        if (!name) {
            throw new Error('Incorrect name!');
        }

        const tagExists = await this.tagsRepository.findByName(name);

        if (tagExists) {
            throw new Error('Tag already exists!');
        }

        const tag = await this.tagsRepository.create(name);

        return tag;
    }
}
