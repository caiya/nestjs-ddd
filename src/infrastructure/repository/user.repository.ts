import { Injectable, Inject } from '@nestjs/common';
import { UserConverter } from '../converter/user.converter';
import { UserRepository } from '#/domain/aggregate/user/user.repository';
import { UserMapperService } from '../mapper/user.mapper';
import { User } from '#/domain/aggregate/user/user';

@Injectable()
export class UserRepositoryImpl implements UserRepository {

    @Inject()
    private readonly userMapper: UserMapperService;

    async find(id: number): Promise<User> {
        const userEntity = await this.userMapper.find(id);

        // 将数据库的poji转换为 领域对象
        const user = UserConverter.toDomain(userEntity);
        return user;
    }

    async save(user: User): Promise<User> {
        const userEntity = UserConverter.toEntity(user);
        const inserted = await this.userMapper.add(userEntity);

        const res = UserConverter.toDomain(inserted);
        return res;
    }
}
