import { getRepository, Repository } from 'typeorm';

import { Tag } from '../entities/Tag';
import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';

export class TagsRepository implements ITagsRepository {
    private repository: Repository<Tag>;

    constructor() {
        this.repository = getRepository(Tag);
    }

    async findByName(name: string): Promise<Tag> {
        const tag = await this.repository.findOne({ name });

        return tag;
    }

    async list(): Promise<Tag[]> {
        const tags = await this.repository.find();

        return tags;
    }

    async create(name: string): Promise<Tag> {
        const tag = this.repository.create({ name });

        await this.repository.save(tag);

        return tag;
    }
}
