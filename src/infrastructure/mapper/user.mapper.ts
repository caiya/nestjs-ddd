import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { BaseMapperService } from './base.mapper';
import { PostEntity } from '../entity/post.entity';

@Injectable()
export class UserMapperService extends BaseMapperService<UserEntity> {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>,
    ) {
        super(userRepo);
    }
}
