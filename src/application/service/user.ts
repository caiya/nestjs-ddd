import { UserQueryDto } from "#/interfaces/graphql/user/types/user";
import { UserDetailQuery } from "#/interfaces/graphql/user/dto/user-detail.args";

export interface IUserService {

    findOneById(userDetailQuery: UserDetailQuery): Promise<UserQueryDto>;

}