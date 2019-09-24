import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { InterfacesModule } from './interfaces/interfaces.module';
import { GraphQLModule } from '@nestjs/graphql'
import { ApplicationModule } from './application/application.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ddd',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      logger: 'advanced-console'
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    DomainModule, InfrastructureModule, InterfacesModule, ApplicationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
