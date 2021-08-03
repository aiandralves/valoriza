import { Tag } from '../typeorm/entities/Tag';

export interface ITagsRepository {
    findByName(name: string): Promise<Tag>;

    list(): Promise<Tag[]>;

    create(name: string): Promise<Tag>;
}
