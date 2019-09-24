import { IUserRepository } from "../../domain/repository/user";
import { EntityRepository, Repository, AbstractRepository } from 'typeorm';
import { UserEntity } from "../entity/user.entity";
import { PostAuthor } from "#/domain/aggregate/user/post-author";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserConverter } from "../converter/user.converter";
import { UserQueryDto } from "#/interfaces/graphql/user/types/user";

@Injectable()
export class UserRepositoryInfrastructure implements IUserRepository{

    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    async getById(id: number): Promise<UserQueryDto> {
        const userEntity = await this.userRepo.findOne(id)
        let user: PostAuthor = UserConverter.deserialize(userEntity)
        return null
    }
}