import { EntityRepository, Repository, AbstractRepository } from 'typeorm';
import { UserEntity } from "../entity/user.entity";
import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserConverter } from "../converter/user.converter";
import { UserQueryDto } from "#/interfaces/graphql/user/types/user";
import { UserRepository } from "#/domain/aggregate/user/user.repository";
import { User } from '#/domain/aggregate/user/user';
import { UserMapperService } from '../mapper/user.mapper';

@Injectable()
export class UserRepositoryImpl implements UserRepository{
    
    @Inject()
    private readonly userMapper: UserMapperService;

    async find(id: number): Promise<User> {
        const userEntity = await this.userMapper.find(id)

        // 将数据库的poji转换为 领域对象
        let user = UserConverter.deserialize(userEntity)
        return user
    }
}