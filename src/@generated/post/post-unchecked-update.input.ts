import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutPostNestedInput } from '../comment/comment-unchecked-update-many-without-post-nested.input';

@InputType()
export class PostUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
}
