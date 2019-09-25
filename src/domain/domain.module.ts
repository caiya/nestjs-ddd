import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
    imports: [ InfrastructureModule ],
    providers: [],
    exports: [],
})
export class DomainModule {}
