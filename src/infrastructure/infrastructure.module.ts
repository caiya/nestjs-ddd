import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserMapperService } from './mapper/user.mapper';
import { PostEntity } from './entity/post.entity';
import { PostMapperService } from './mapper/post.mapper';
import { UserRepositoryImpl } from './repository/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, PostEntity])],
    providers: [UserMapperService, PostMapperService, UserRepositoryImpl],
    exports: [UserMapperService, PostMapperService, UserRepositoryImpl],
})
export class InfrastructureModule {}
