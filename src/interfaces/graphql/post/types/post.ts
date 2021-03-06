import { Field, Int, ObjectType } from 'type-graphql';
import { UserDto } from '../../user/types/user';

@ObjectType()
export class PostDto {

    @Field(() => Int)
    id: number;

    @Field()
    authorId: number;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    postingTime: Date;

    @Field()
    status: number;

    @Field(() => UserDto)
    postAuthor: UserDto;
}
