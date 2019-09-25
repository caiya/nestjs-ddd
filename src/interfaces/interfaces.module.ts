import { Module } from '@nestjs/common';
import { UserResolver } from './graphql/user/resolvers/user';
import { ApplicationModule } from '../application/application.module';
import { PostResolver } from './graphql/post/resolvers/post';

@Module({
    imports: [ApplicationModule],
    providers: [UserResolver, PostResolver],
})
export class InterfacesModule {}
