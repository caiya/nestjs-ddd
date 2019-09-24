import { Module } from '@nestjs/common';
import { UserRepositoryInfrastructure } from './repository/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './mappings/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserRepositoryInfrastructure],
    exports: [UserRepositoryInfrastructure]
})
export class InfrastructureModule {}
