import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entity/user.entity";
import { Repository } from "typeorm";
import { BaseMapperService } from "./base.mapper";
import { PostEntity } from "../entity/post.entity";

@Injectable()
export class PostMapperService extends BaseMapperService<PostEntity>{

    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepo: Repository<PostEntity>,
    ) {
        super(postRepo)
    }
}
