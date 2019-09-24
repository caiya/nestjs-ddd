import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { User } from "../sdl/user";
import { Post } from "../sdl/post";
import { Int } from "type-graphql";
import { UserService } from "../../../application/service/impl/user";
import { PostService } from "../../../application/service/impl/post";

@Resolver(of => User)
export class UserResolver {

    constructor(
        private readonly userService: UserService,
        private readonly postService: PostService,
      ) {}

    @Query(returns => User, {
        name: 'user'
    })
    async getUser(@Args({ name: 'id', type: () => Int }) id: number) {
        return await this.userService.findOneById(id);
    }

    @ResolveProperty()
    async posts(@Parent() user) {
        const { id } = user;
        return await this.postService.findAll({ authorId: id });
    }
}