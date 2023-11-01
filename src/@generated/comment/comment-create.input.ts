import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { PostCreateNestedOneWithoutCommentsInput } from '../post/post-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => PostCreateNestedOneWithoutCommentsInput, {nullable:false})
    post!: PostCreateNestedOneWithoutCommentsInput;
}
