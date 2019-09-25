import { ConverterInterface } from "./converter";
import { UserEntity } from "../entity/user.entity";
import { User } from "../../domain/aggregate/user/user";

export class UserConverter {

    static serialize(user: User): UserEntity {
        const userEntity = new UserEntity()
        userEntity.id = user.id
        return userEntity
    }

    static deserialize(userEntity: UserEntity): User {
        const postAuthor: User = new User(userEntity.id)
        return postAuthor
    }

}