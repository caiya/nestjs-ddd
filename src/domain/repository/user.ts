import { PostAuthor } from "../aggregate/user/post-author";
import { UserEntity } from "#/infrastructure/entity/user.entity";
import { UserQueryDto } from "#/interfaces/graphql/user/types/user";

// 用户仓储接口
export interface IUserRepository {

    // 根据id查找发帖人
    getById(id: number): Promise<UserQueryDto>;

}