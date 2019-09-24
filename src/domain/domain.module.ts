import { Module } from '@nestjs/common';
import { UserRepository } from './repository/impl/user';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
    imports: [InfrastructureModule],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class DomainModule {}
