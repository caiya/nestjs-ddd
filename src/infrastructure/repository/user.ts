import { IUserRepository } from "../../../src/domain/repository/user";
import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from "../mappings/user";
import { User } from "../../../src/domain/model/user/user";

@EntityRepository(UserEntity)
export class UserRepositoryInfrastructure {

    getById(id: number): UserEntity {
        return null
    }
}