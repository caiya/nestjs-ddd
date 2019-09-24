import { IUserRepository } from "../user";
import { PostAuthor } from "../../aggregate/user/post-author";
import { Injectable, Inject } from "@nestjs/common";
import { UserEntity } from "#/infrastructure/entity/user.entity";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(@Inject('UserRepositoryInfrastructure') private readonly userRepository: IUserRepository) {}

    async getById(id: number): Promise<UserEntity> {
        const userEntity = await this.userRepository.getById(id) // po
        // TODO userEntity -> User // po -> do
        return null
    }

}