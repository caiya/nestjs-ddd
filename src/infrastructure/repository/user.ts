import { IUserRepository } from "../../domain/repository/user";
import { EntityRepository, Repository, AbstractRepository } from 'typeorm';
import { UserEntity } from "../mappings/user.entity";
import { PostAuthor } from "#/domain/model/user/post-author";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepositoryInfrastructure implements IUserRepository{

    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    async getById(id: number): Promise<PostAuthor> {
        const userEntity = await this.userRepo.findOne(id)
        console.log('userEntity', userEntity)
        // po -> do
        return null
    }
}