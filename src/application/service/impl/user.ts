import { IUserService } from "../user";
import { Injectable, Inject } from "@nestjs/common";
import { QueryUserDetailArgs } from "#/interfaces/graphql/user/dto/user-detail.args";
import { UserAssembler } from "../../../application/assembler/user.assembler";
import { IUserRepository } from "#/domain/repository/user";
import { UserEntity } from "#/infrastructure/entity/user.entity";
import { UserQueryDto } from "#/interfaces/graphql/user/types/user";

export class UserService implements IUserService {


    @Inject('UserRepository')
    private readonly userRepository: IUserRepository; // 仓储库查询

    @Inject()
    private readonly userAssembler: UserAssembler; // 数据转换

    /**
     * 查询服务直接调用 userRepository 查询获取 userEntity 实体，再使用 Assembler 将实体转为 Dto
     * @param args 
     */
    async findOneById (args: QueryUserDetailArgs) : Promise<UserQueryDto> {
        let uid = args.id
        let user: UserEntity = await this.userRepository.getById(uid)

        return this.userAssembler.assembleQueryUser(user)
    }
}