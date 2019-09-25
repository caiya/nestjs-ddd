import { Resolver, Query, Args, ResolveProperty, Parent, Mutation } from "@nestjs/graphql";
import { UserDetailQueryArg } from "../dto/user-detail.args";
import { IUserService } from "#/application/service/user";
import { IPostService } from "#/application/service/post";
import { Inject } from "@nestjs/common";
import { UserDto } from "../types/user";
import { UserInput } from "../dto/user-add.input";

@Resolver(of => UserDto)
export class UserResolver {

    constructor(
        @Inject('UserService') private readonly userService: IUserService,
        @Inject('PostService') private readonly postService: IPostService,
      ) {}

    @Query(returns => UserDto, {
        name: 'user'
    })
    async getUser(@Args() userDetailQuery: UserDetailQueryArg) {
        return await this.userService.findOneById(userDetailQuery);
    }

    @ResolveProperty()
    async posts(@Parent() user: UserDto) {
        const { id } = user;
        const posts = await this.postService.findAll({ userId: id });
        return posts || []
    }

    @Mutation(returns => UserDto)
    async addUser(@Args('user') user: UserInput) {
        return await this.userService.add(user)
    }
}