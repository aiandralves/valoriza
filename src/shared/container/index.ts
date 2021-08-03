import { container } from 'tsyringe';

import { IUsersRespository } from '@modules/users/repositories/IUsersRespository';
import { UsersRepository } from '@modules/users/typeorm/repositories/UsersRepository';

import { ITagsRepository } from '@modules/tags/repositories/ITagsRepository';
import { TagsRepository } from '@modules/tags/typeorm/repositories/TagsRepository';

import { IComplimentsReposiotry } from '@modules/compliments/repositories/IComplimentsRepository';
import { ComplimentsRepository } from '@modules/compliments/typeorm/repositories/ComplimentsRepository';

container.registerSingleton<IUsersRespository>(
    'UsersRepository',
    UsersRepository
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IComplimentsReposiotry>(
    'ComplimentsRepository',
    ComplimentsRepository
);
