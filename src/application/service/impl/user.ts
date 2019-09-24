import { IUserService } from "../user";
import { Injectable, Inject } from "@nestjs/common";
import { UserRepository } from "../../../domain/repository/impl/user";
import { User } from "#/interfaces/graphql/user/types/user";
import { QueryUserDetailArgs } from "#/interfaces/graphql/user/dto/user-detail.args";
import { PostAuthor } from "#/domain/model/user/post-author";
import { UserAssembler } from "../../../application/assembler/user.assembler";

@Injectable()
export class UserService implements IUserService {

    constructor(private readonly userRepository: UserRepository) {}

    @Inject()
    private readonly userAssembler: UserAssembler;

    async findOneById (args: QueryUserDetailArgs) : Promise<User> {
        let uid = args.id
        let user: PostAuthor = await this.userRepository.getById(uid)

        // domain层model组装成dto，组装过程：
        // 1、完成类型转换，数据格式化
        // 2、将多个model组合成一个dto，一并返回
        return this.userAssembler.assembleQueryPostAuthor(user)
    }
}