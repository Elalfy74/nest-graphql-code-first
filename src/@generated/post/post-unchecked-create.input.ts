import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutPostInput } from '../comment/comment-unchecked-create-nested-many-without-post.input';

@InputType()
export class PostUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => CommentUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
}
