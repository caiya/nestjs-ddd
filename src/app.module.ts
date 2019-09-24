import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { InterfacesModule } from './interfaces/interfaces.module';
import { GraphQLModule } from '@nestjs/graphql'
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    DomainModule, InfrastructureModule, InterfacesModule, ApplicationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
