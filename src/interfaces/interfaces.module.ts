import { Module } from '@nestjs/common';
import { UserResolver } from './web/graphql/user';
import { ApplicationModule } from '../application/application.module'

@Module({
    imports: [ApplicationModule],
    providers: [UserResolver]
})
export class InterfacesModule {}
