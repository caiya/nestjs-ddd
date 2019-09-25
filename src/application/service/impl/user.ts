import { IUserService } from "../user";
import { Inject } from "@nestjs/common";
import { UserDetailQueryArg } from "#/interfaces/graphql/user/dto/user-detail.args";
import { UserAssembler } from "../../../application/assembler/user.assembler";
import { UserMapperService } from "../../../infrastructure/mapper/user.mapper";
import { UserDto } from "#/interfaces/graphql/user/types/user";
import { UserInput } from "#/interfaces/graphql/user/dto/user-add.input";
import { UserRepositoryImpl } from "../../../infrastructure/repository/user.repository";
import { User } from "../../../domain/aggregate/user/user";

export class UserService implements IUserService {

    /**
     * 查询时需要UserMapperService、UserAssembler
     */
    @Inject()
    private readonly userMapper: UserMapperService; // 仓储库查询

    @Inject()
    private readonly userAssembler: UserAssembler; // 数据转换

    @Inject()
    private readonly userRepository: UserRepositoryImpl;

    /**
     * 
     */

    /**
     * 查询服务直接调用 userMapper 查询获取 userEntity 实体，再使用 Assembler 将实体转为 Dto
     * @param args 
     */
    async findOneById (args: UserDetailQueryArg) : Promise<UserDto> {
        let uid = args.id
        let user = await this.userMapper.find(uid)
        return this.userAssembler.apply(user)
    }

    /**
     * 
     * @param user 新增的用户信息
     */
    async add(user: UserInput): Promise<UserDto> {

        // 应用服务和domain服务的区别是：应用服务一般不牵扯业务，domain服务是实现领域对象外的业务功能，比如转账操作

        // 数据校验

        // create domain
        let userDomain = new User()
        userDomain = Object.assign({}, userDomain, user)
        
        // 流程编排

        // domain save
        this.userRepository.save(userDomain)

        // event发送（省略）
        return null
    }
}