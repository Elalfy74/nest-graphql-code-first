import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
