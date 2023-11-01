import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
import { CommentCreateNestedManyWithoutPostInput } from '../comment/comment-create-nested-many-without-post.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPostsInput;

    @Field(() => CommentCreateNestedManyWithoutPostInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutPostInput;
}
