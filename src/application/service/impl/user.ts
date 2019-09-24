import { IUserService } from "../user";
import { Injectable, Inject } from "@nestjs/common";
import { UserRepository } from "../../../domain/repository/impl/user";
import { User } from "#/interfaces/graphql/user/types/user";
import { QueryUserDetailArgs } from "#/interfaces/graphql/user/dto/user-detail.args";

@Injectable()
export class UserService implements IUserService {

    constructor(private readonly userRepository: UserRepository) {}

    async findOneById (args: QueryUserDetailArgs) : Promise<User> {
        return this.userRepository.getById(args.id)
    }
}