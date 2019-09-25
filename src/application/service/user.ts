import { UserDetailQueryArg } from "#/interfaces/graphql/user/dto/user-detail.args";
import { UserDto } from "#/interfaces/graphql/user/types/user";

export interface IUserService {

    findOneById(userDetailQuery: UserDetailQueryArg): Promise<UserDto>;

}