import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { QueryUserDetailArgs } from "../dto/user-detail.args";
import { UserService } from "../../../../application/service/impl/user";
import { PostService } from "../../../../application/service/impl/post";
import { User } from "../types/user";

@Resolver(of => User)
export class UserResolver {

    constructor(
        private readonly userService: UserService,
        private readonly postService: PostService,
      ) {}

    @Query(returns => User, {
        name: 'user'
    })
    async getUser(@Args() requestDto: QueryUserDetailArgs): Promise<User> {
        return await this.userService.findOneById(requestDto);
    }

    @ResolveProperty()
    async posts(@Parent() user) {
        const { id } = user;
        return await this.postService.findAll({ authorId: id });
    }
}