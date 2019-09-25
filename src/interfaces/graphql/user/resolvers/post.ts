import { Resolver, ResolveProperty, Parent } from "@nestjs/graphql";
import { PostDto } from "../types/post";
import { UserService } from "../../../../application/service/impl/user";

@Resolver(of => PostDto)
export class PostResolver {

    constructor(
        private readonly userService: UserService,
      ) {}

    @ResolveProperty('postAuthor')
    async postAuthor(@Parent() post: PostDto) {
        const { authorId } = post;
        // return await this.userService.findOneById(authorId)
    }
}