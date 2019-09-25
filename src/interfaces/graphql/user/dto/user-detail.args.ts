import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class UserDetailQuery {
    @Field()
    @Min(1)
    id: number;
}