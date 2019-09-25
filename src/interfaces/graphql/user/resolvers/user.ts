import { Resolver, Query, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { UserDetailQuery } from "../dto/user-detail.args";
import { UserQueryDto } from "../types/user";
import { IUserService } from "#/application/service/user";
import { IPostService } from "#/application/service/post";
import { Inject } from "@nestjs/common";

@Resolver(of => UserQueryDto)
export class UserResolver {

    constructor(
        @Inject('UserService') private readonly userService: IUserService,
        @Inject('PostService') private readonly postService: IPostService,
      ) {}

    @Query(returns => UserQueryDto, {
        name: 'user'
    })
    async getUser(@Args() userDetailQuery: UserDetailQuery) {
        return await this.userService.findOneById(userDetailQuery);
    }

    @ResolveProperty()
    async posts(@Parent() user) {
        const { id } = user;
        return await this.postService.findAll({ authorId: id });
    }
}