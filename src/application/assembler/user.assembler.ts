import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserEntity } from '#/infrastructure/entity/user.entity';
import { BaseAssembler } from './base.assembler';
import { UserDto } from '../../interfaces/graphql/user/types/user';
import { User } from '#/domain/aggregate/user/user';
import { PostMapperService } from '../../infrastructure/mapper/post.mapper';
import { PostAssembler } from './post.assembler';

@Injectable()
export class UserAssembler implements BaseAssembler<UserEntity, User, UserDto> {

    @Inject()
    private readonly postMapper: PostMapperService;

    @Inject(forwardRef(() => PostAssembler))
    private readonly postAssembler: PostAssembler;

    async applyEntityToDto(userEntity: UserEntity): Promise<UserDto> {
        if (!userEntity) {
            return null;
        }
        let userDto = new UserDto();
        userDto = Object.assign({}, userDto, userEntity); // 类似于 BeanUtils.copyProperties
        return userDto;
    }

    async applyDomainEntityToDto(user: User): Promise<UserDto> {
        let userDto = new UserDto();
        userDto = Object.assign({}, userDto, user);
        const postEntitys = await this.postMapper.findAll({ userId: userDto.id });
        userDto.posts = userDto.posts || [];
        for (const iterator of postEntitys) {
            userDto.posts.push(await this.postAssembler.applyEntityToDto(iterator));
        }
        return userDto;
    }
}
