import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateNestedManyWithoutPostInput } from '../comment/comment-create-nested-many-without-post.input';

@InputType()
export class PostCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => CommentCreateNestedManyWithoutPostInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutPostInput;
}
