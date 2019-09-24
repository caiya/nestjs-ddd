import { IUserRepository } from "../../domain/repository/user";
import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from "../mappings/user.entity";
import { PostAuthor } from "#/domain/model/user/post-author";

@EntityRepository(UserEntity)
export class UserRepositoryInfrastructure extends Repository<UserEntity> implements IUserRepository{

    async getById(id: number): Promise<PostAuthor> {
        const userEntity = await this.createQueryBuilder().getOne()
        console.log('userEntity', userEntity)
        return userEntity as PostAuthor
    }
}