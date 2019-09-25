import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class UserDetailQueryArg {
    @Field()
    @Min(1)
    id: number;
}
