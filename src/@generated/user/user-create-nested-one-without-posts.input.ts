import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutPostsInput } from './user-create-or-connect-without-posts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateNestedOneWithoutPostsInput {

    @HideField()
    create?: UserCreateWithoutPostsInput;

    @HideField()
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;
}
