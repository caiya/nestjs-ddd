import { ConverterInterface } from "./converter";
import { UserEntity } from "../entity/user.entity";
import { User } from "#/domain/model/user/user";

export class UserConverter implements ConverterInterface<User, UserEntity> {

    serialize(user: User): UserEntity {
        const userEntity = new UserEntity()
        userEntity.id = user.id
        return userEntity
    }

    deserialize(userEntity: UserEntity): User {
        const user: User = new User(userEntity.id)
        return user
    }

}