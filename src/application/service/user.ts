import { User } from "#/interfaces/graphql/user/types/user";
import { QueryUserDetailArgs } from "#/interfaces/graphql/user/dto/user-detail.args";

export interface IUserService {

    findOneById(requestDto: QueryUserDetailArgs): Promise<User>;

}