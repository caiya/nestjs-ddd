import { IPostService } from "../post";
import { Injectable, Inject } from "@nestjs/common";

export class PostService implements IPostService {

    findAll(options) {

    }

    // @Inject()
    // private readonly postMapper: PostMapperService; // 仓储库查询

    // @Inject()
    // private readonly userAssembler: PostAssembler; // 数据转换

}