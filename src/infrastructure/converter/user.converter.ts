import { ConverterInterface } from "./converter";
import { UserEntity } from "../entity/user.entity";
import { User } from "../../domain/aggregate/user/user";
import { UserQueryDto } from "#/interfaces/graphql/user/types/user";

export class UserConverter {

    static serialize(user: UserQueryDto): UserEntity {
        const userEntity = new UserEntity()
        userEntity.id = user.id
        return userEntity
    }

    static deserialize(userEntity: UserEntity): UserQueryDto {
        let userQueryDto = new UserQueryDto()

        userQueryDto = Object.assign({}, userQueryDto, userEntity)
        
        return userQueryDto
    }

}