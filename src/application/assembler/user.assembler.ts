import { Injectable } from "@nestjs/common";
import { UserQueryDto } from "../../interfaces/graphql/user/types/user";
import { UserEntity } from "#/infrastructure/entity/user.entity";
import { BaseAssembler } from "./base.assembler";

@Injectable()
export class UserAssembler implements BaseAssembler<UserEntity, UserQueryDto>{

    async apply(userEntity: UserEntity): Promise<UserQueryDto> {
        if (!userEntity) {
            return null
        }
        let userDto: UserQueryDto = new UserQueryDto()
        userDto = Object.assign({}, userDto, userEntity) // 类似于 BeanUtils.copyProperties
        return userDto
    }

}