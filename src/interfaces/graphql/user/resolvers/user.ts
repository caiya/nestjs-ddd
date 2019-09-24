import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { QueryUserDetailArgs } from "../dto/user-detail.args";
import { User } from "../types/user";
import { IUserService } from "#/application/service/user";
import { IPostService } from "#/application/service/post";
import { Inject } from "@nestjs/common";

@Resolver(of => User)
export class UserResolver {

    constructor(
        @Inject('UserService') private readonly userService: IUserService,
        @Inject('PostService') private readonly postService: IPostService,
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