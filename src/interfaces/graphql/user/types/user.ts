import { Field, Int, ObjectType, InputType, ArgsType } from 'type-graphql';
import { PostDto } from '../../post/types/post';
import { IsOptional, Length, MaxLength, Min } from 'class-validator'

@ObjectType()
export class UserQueryDto {
    @Field(type => Int)
    id: number;

    @Field(type => [PostDto])
    posts: PostDto[];
}