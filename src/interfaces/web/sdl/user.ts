import { Field, Int, ObjectType } from 'type-graphql';
import { Post } from './post';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field(type => [Post])
  posts: Post[];
}
