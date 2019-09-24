import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class QueryUserDetailArgs {
    @Field()
    @Min(1)
    id: number;
}