import { Field, Int, ObjectType } from 'type-graphql';
import { UserQueryDto } from './user';

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

    @Field(() => UserQueryDto)
    postAuthor: UserQueryDto;
}