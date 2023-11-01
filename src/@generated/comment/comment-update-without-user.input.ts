import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateOneRequiredWithoutCommentsNestedInput } from '../post/post-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;
}
