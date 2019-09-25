import { Injectable, Inject } from "@nestjs/common";
import { UserConverter } from "../converter/user.converter";
import { UserRepository } from "#/domain/aggregate/user/user.repository";
import { UserMapperService } from '../mapper/user.mapper';
import { UserDto } from "#/interfaces/graphql/user/types/user";

@Injectable()
export class UserRepositoryImpl implements UserRepository{
    
    @Inject()
    private readonly userMapper: UserMapperService;

    async find(id: number): Promise<UserDto> {
        const userEntity = await this.userMapper.find(id)

        // 将数据库的poji转换为 领域对象
        let user = UserConverter.deserialize(userEntity)
        return user
    }
}