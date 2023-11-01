import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;

    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
