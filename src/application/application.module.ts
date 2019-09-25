import { Module } from '@nestjs/common';
import { UserService } from './service/impl/user';
import { PostService } from './service/impl/post';
import { DomainModule } from '../domain/domain.module';
import { UserAssembler } from './assembler/user.assembler';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { PostAssembler } from './assembler/post.assembler';

@Module({
    imports: [DomainModule, InfrastructureModule],
    exports: [UserService, PostService],
    providers: [UserService, PostService, UserAssembler, PostAssembler],
})
export class ApplicationModule {}
