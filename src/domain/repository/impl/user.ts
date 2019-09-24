import { IUserRepository } from "../user";
import { PostAuthor } from "../../../domain/model/user/post-author";
import { UserRepositoryInfrastructure } from "../../../infrastructure/repository/user";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(@Inject('UserRepositoryInfrastructure') private readonly userRepository: IUserRepository) {}

    async getById(id: number): Promise<PostAuthor> {
        const userEntity = await this.userRepository.getById(id) // po
        // TODO userEntity -> User // po -> do
        return userEntity as PostAuthor
    }

}