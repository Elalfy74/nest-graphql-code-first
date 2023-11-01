import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';

@InputType()
export class PostCreateWithoutCommentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPostsInput;
}
