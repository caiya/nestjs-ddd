import { Injectable } from '@nestjs/common';
import { UserEntity } from '#/infrastructure/entity/user.entity';
import { BaseAssembler } from './base.assembler';
import { UserDto } from '../../interfaces/graphql/user/types/user';

@Injectable()
export class UserAssembler implements BaseAssembler<UserEntity, UserDto> {

    async apply(userEntity: UserEntity): Promise<UserDto> {
        if (!userEntity) {
            return null;
        }
        let userDto = new UserDto();
        userDto = Object.assign({}, userDto, userEntity); // 类似于 BeanUtils.copyProperties
        return userDto;
    }

}
