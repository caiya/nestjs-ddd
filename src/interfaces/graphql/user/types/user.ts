import { Field, Int, ObjectType, InputType, ArgsType } from 'type-graphql';
import { PostDto } from '../../post/types/post';

@ObjectType()
export class UserDto {
    @Field(type => Int)
    id: number;

    @Field(type => [PostDto])
    posts: PostDto;
}