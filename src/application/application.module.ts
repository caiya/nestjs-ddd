import { Module } from '@nestjs/common';
import { UserService } from './service/impl/user';
import { PostService } from './service/impl/post';
import { DomainModule } from '../domain/domain.module';
import { UserAssembler } from './assembler/user.assembler';

@Module({
    imports: [DomainModule],
    exports: [UserService, PostService],
    providers: [UserService, PostService, UserAssembler]
})
export class ApplicationModule {}
