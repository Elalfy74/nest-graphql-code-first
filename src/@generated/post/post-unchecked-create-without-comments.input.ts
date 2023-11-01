import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostUncheckedCreateWithoutCommentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
