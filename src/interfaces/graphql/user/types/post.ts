import { Field, Int, ObjectType } from 'type-graphql';
import { User } from './user';

@ObjectType()
export class Post {

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

    @Field(() => User)
    postAuthor: User;
}