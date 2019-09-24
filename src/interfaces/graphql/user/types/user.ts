import { Field, Int, ObjectType, InputType, ArgsType } from 'type-graphql';
import { Post } from './post';
import { IsOptional, Length, MaxLength, Min } from 'class-validator'

@ObjectType()
export class User {
    @Field(type => Int)
    id: number;

    @Field(type => [Post])
    posts: Post[];
}