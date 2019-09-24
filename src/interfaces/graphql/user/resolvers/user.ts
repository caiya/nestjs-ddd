import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from "@nestjs/graphql";
import { QueryUserDetailArgs } from "../dto/user-detail.args";
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
    async getUser(@Args() requestDto: QueryUserDetailArgs): Promise<UserQueryDto> {
        return await this.userService.findOneById(requestDto);
    }

    @ResolveProperty()
    async posts(@Parent() user) {
        const { id } = user;
        console.log('#################', user)
        return await this.postService.findAll({ authorId: id });
    }
}