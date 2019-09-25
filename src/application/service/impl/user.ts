import { IUserService } from "../user";
import { Injectable, Inject } from "@nestjs/common";
import { UserDetailQuery } from "#/interfaces/graphql/user/dto/user-detail.args";
import { UserAssembler } from "../../../application/assembler/user.assembler";
import { UserQueryDto } from "#/interfaces/graphql/user/types/user";
import { UserMapperService } from "../../../infrastructure/mapper/user.mapper";

export class UserService implements IUserService {

    @Inject()
    private readonly userMapper: UserMapperService; // 仓储库查询

    @Inject()
    private readonly userAssembler: UserAssembler; // 数据转换

    /**
     * 查询服务直接调用 userMapper 查询获取 userEntity 实体，再使用 Assembler 将实体转为 Dto
     * @param args 
     */
    async findOneById (args: UserDetailQuery) : Promise<UserQueryDto> {
        let uid = args.id
        let user = await this.userMapper.findById(uid)
        console.log('user', user)
        return this.userAssembler.assembleQueryUser(user)
    }
}