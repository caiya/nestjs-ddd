import { Resolver, ResolveProperty, Parent } from "@nestjs/graphql";
import { Post } from "../sdl/post";
import { UserService } from "../../../application/service/impl/user";

@Resolver(of => Post)
export class PostResolver {

    constructor(
        private readonly userService: UserService,
      ) {}

    @ResolveProperty('postAuthor')
    async postAuthor(@Parent() post: Post) {
        const { authorId } = post;
        return await this.userService.findOneById(authorId)
    }
}