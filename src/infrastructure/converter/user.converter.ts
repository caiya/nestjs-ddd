import { UserEntity } from '../entity/user.entity';
import { User } from '../../domain/aggregate/user/user';

export class UserConverter {

    static toEntity(user: User): UserEntity {
        let userEntity = new UserEntity();
        userEntity = Object.assign({}, userEntity, user);
        return userEntity;
    }

    static toDomain(userEntity: UserEntity): User {
        let user = new User();
        user = Object.assign({}, user, userEntity);
        return user;
    }

}
