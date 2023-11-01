import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../user/user-update-one-required-without-posts-nested.input';
import { CommentUpdateManyWithoutPostNestedInput } from '../comment/comment-update-many-without-post-nested.input';

@InputType()
export class PostUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPostsNestedInput;

    @Field(() => CommentUpdateManyWithoutPostNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutPostNestedInput;
}
