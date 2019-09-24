import { IUserService } from "../user";
import { Injectable, Inject } from "@nestjs/common";
import { UserRepository } from "../../../domain/repository/impl/user";

@Injectable()
export class UserService implements IUserService {

    @Inject()
    private readonly userRepository: UserRepository

    findOneById(id: number) {
        return this.userRepository.getById(id)
    }
}