import { IUserRepository } from "../user";
import { PostAuthor } from "../../../domain/model/user/post-author";
import { UserRepositoryInfrastructure } from "../../../infrastructure/repository/user";
import { Injectable } from "@nestjs/common";
import { QueryUserDetailArgs } from "#/interfaces/graphql/user/dto/user-detail.args";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(private readonly userRepository: UserRepositoryInfrastructure) {}

    async getById(id: number): Promise<PostAuthor> {
        const userEntity = await this.userRepository.getById(id) // po
        console.log('userEntity', userEntity)
        // TODO userEntity -> User // po -> do
        return userEntity as PostAuthor
    }
}