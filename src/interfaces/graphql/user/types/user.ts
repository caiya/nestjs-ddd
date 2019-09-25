import { Field, Int, ObjectType, InputType, ArgsType } from 'type-graphql';
import { PostDto } from '../../post/types/post';

@ObjectType()
export class UserDto {
    @Field(type => Int)
    id: number;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    isActive: boolean;

    @Field(type => [PostDto])
    posts: PostDto;
}
