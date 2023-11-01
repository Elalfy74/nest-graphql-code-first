import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutCommentsInput } from '../post/post-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => PostCreateNestedOneWithoutCommentsInput, {nullable:false})
    post!: PostCreateNestedOneWithoutCommentsInput;
}
