import { Module } from '@nestjs/common';
import { UserRepositoryInfrastructure } from './repository/user';

@Module({
    providers: [UserRepositoryInfrastructure],
    exports: [UserRepositoryInfrastructure]
})
export class InfrastructureModule {}
