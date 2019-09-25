import { UserDetailQueryArg } from '#/interfaces/graphql/user/dto/user-detail.args';
import { UserDto } from '#/interfaces/graphql/user/types/user';
import { UserInput } from '#/interfaces/graphql/user/dto/user-add.input';

export interface IUserService {

    findOneById(userDetailQuery: UserDetailQueryArg): Promise<UserDto>;

    add(user: UserInput): Promise<UserDto>;
}
