import { Injectable } from "@nestjs/common";
import { PostAuthor } from "#/domain/aggregate/user/post-author";
import { UserQueryDto } from "../../interfaces/graphql/user/types/user";
import { UserEntity } from "#/infrastructure/entity/user.entity";

@Injectable()
export class UserAssembler {

    assembleQueryUser(userEntity: UserEntity): UserQueryDto {
        if (!userEntity) {
            return null
        }
        let userDto: UserQueryDto = new UserQueryDto()
        userDto = Object.assign(userEntity) // 类似于 BeanUtils.copyProperties
        return userDto
    }

}