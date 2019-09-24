import { IUserRepository } from "../user";
import { PostAuthor } from "../../../domain/model/user/post-author";
import { UserRepositoryInfrastructure } from "../../../infrastructure/repository/user";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(private readonly userRepository: UserRepositoryInfrastructure) {}

    getById(id: number): PostAuthor {
        const userEntity = this.userRepository.getById(id) // po
        // TODO userEntity -> User // po -> do
        return userEntity as PostAuthor
    }
}