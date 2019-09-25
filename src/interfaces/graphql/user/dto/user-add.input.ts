import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInput {

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    isActive: boolean;
}
