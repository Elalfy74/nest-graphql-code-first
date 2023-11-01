import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CommentUpdateManyWithoutPostNestedInput } from '../comment/comment-update-many-without-post-nested.input';

@InputType()
export class PostUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => CommentUpdateManyWithoutPostNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutPostNestedInput;
}
