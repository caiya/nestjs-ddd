import { BaseAssembler } from "./base.assembler";
import { PostEntity } from "#/infrastructure/entity/post.entity";
import { PostDto } from "../../interfaces/graphql/user/types/post";
import { PostStatus } from "../../domain/aggregate/post/post-status";
import { Inject, Injectable } from "@nestjs/common";
import { UserMapperService } from "../../infrastructure/mapper/user.mapper";
import { UserAssembler } from "./user.assembler";

@Injectable()
export class PostAssembler implements BaseAssembler<PostEntity, PostDto>{

    @Inject()
    private readonly userMapper: UserMapperService;

    @Inject()
    private readonly userAssembler: UserAssembler;

    async apply(postEntity: PostEntity) : Promise<PostDto> {
        if (!postEntity) {
            return null
        }
        let postDto = new PostDto()
        postDto = Object.assign({}, postDto, postEntity)

        // 单独处理部分差异属性
        postDto.authorId = postEntity.userId
        postDto.postingTime = new Date()
        postDto.status = PostStatus.HAS_POSTED

        // 查询出数据实体，在转换为领域对象
        const userEntity = await this.userMapper.find(postDto.authorId)

        postDto.postAuthor = await this.userAssembler.apply(userEntity)

        return postDto
    }

}