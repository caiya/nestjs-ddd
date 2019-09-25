import { ConverterInterface } from "./converter";
import { UserEntity } from "../entity/user.entity";
import { User } from "../../domain/aggregate/user/user";
import { UserDto } from "#/interfaces/graphql/user/types/user";

export class UserConverter {

    static serialize(user: UserDto): UserEntity {
        const userEntity = new UserEntity()
        userEntity.id = user.id
        return userEntity
    }

    static deserialize(userEntity: UserEntity): UserDto {
        let userQueryDto = new UserDto()

        userQueryDto = Object.assign({}, userQueryDto, userEntity)

        return userQueryDto
    }

}