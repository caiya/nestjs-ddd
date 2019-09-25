import { IPostService } from "../post";
import { Injectable, Inject } from "@nestjs/common";
import { PostMapperService } from "../../../infrastructure/mapper/post.mapper";
import { PostAssembler } from "../../assembler/post.assembler";
import { PostDto } from "#/interfaces/graphql/user/types/post";

export class PostService implements IPostService {

    @Inject()
    private readonly postMapper: PostMapperService; // 仓储库查询

    @Inject()
    private readonly postAssembler: PostAssembler; // 数据转换

    async findAll(options: any) : Promise<PostDto[]>{
        const posts = await this.postMapper.findAll(options)
        const postResults: PostDto[] = []
        for(let i = 0; i < posts.length; i++) {
            let res = await this.postAssembler.apply(posts[i])
            postResults.push(res)
        }
        return postResults
    }
}