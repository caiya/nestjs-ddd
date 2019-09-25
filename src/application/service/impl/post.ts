import { IPostService } from '../post';
import { Injectable, Inject } from '@nestjs/common';
import { PostMapperService } from '../../../infrastructure/mapper/post.mapper';
import { PostAssembler } from '../../assembler/post.assembler';
import { PostDto } from '#/interfaces/graphql/post/types/post';

export class PostService implements IPostService {

    @Inject()
    private readonly postMapper: PostMapperService; // 仓储库查询

    @Inject()
    private readonly postAssembler: PostAssembler; // 数据转换

    async findAll(options: any): Promise<PostDto[]> {
        const posts = await this.postMapper.findAll(options);
        const postResults: PostDto[] = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < posts.length; i++) {
            const res = await this.postAssembler.applyEntityToDto(posts[i]);
            postResults.push(res);
        }
        return postResults;
    }
}
