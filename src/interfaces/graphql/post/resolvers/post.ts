import { Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { PostDto } from '../types/post';
import { UserService } from '../../../../application/service/impl/user';
import { UserDetailQueryArg } from '../../user/dto/user-detail.args';

@Resolver(of => PostDto)
export class PostResolver {

    constructor(
        private readonly userService: UserService,
      ) {}

    @ResolveProperty()
    async postAuthor(@Parent() post: PostDto) {
        const { authorId } = post;

        // 构建一个查询对象，然后委托给应用服务
        const userDetailQuery = new UserDetailQueryArg();
        userDetailQuery.id = authorId;

        return await this.userService.findOneById(userDetailQuery);
    }
}
