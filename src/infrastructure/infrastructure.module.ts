import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserMapperService } from './mapper/user.mapper';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserMapperService],
    exports: [UserMapperService]
})
export class InfrastructureModule {}
