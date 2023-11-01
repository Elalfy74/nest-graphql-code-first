import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';
import { PostUpdateOneRequiredWithoutCommentsNestedInput } from '../post/post-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => PostUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;
}
