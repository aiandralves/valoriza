import { inject, injectable } from 'tsyringe';

import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { Tag } from '@modules/tags/typeorm/entities/Tag';

@injectable()
export class ListTagsServices {
    constructor(
        @inject('TagsRepository')
        private tagsRepository: ITagsRepository
    ) {}

    async execute(): Promise<Tag[]> {
        const tags = await this.tagsRepository.list();

        return tags;
    }
}
