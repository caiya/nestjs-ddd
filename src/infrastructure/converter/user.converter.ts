import { ConverterInterface } from "./converter";
import { UserEntity } from "../entity/user.entity";
import { User } from "../../domain/aggregate/user/user";
import { PostAuthor } from "#/domain/aggregate/user/post-author";

export class UserConverter {

    static serialize(user: PostAuthor): UserEntity {
        const userEntity = new UserEntity()
        userEntity.id = user.id
        return userEntity
    }

    static deserialize(userEntity: UserEntity): PostAuthor {
        const postAuthor: PostAuthor = new User(userEntity.id)
        return postAuthor
    }

}