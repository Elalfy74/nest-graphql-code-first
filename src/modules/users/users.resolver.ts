import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from 'src/@generated/post';
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
} from 'src/@generated/user';

import { CommentsService } from '../comments/comments.service';
import { PostsService } from '../posts/posts.service';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
    private readonly commentsService: CommentsService,
  ) {}

  @Mutation(() => User)
  async createUser(@Args() dto: CreateOneUserArgs) {
    return this.usersService.create(dto);
  }

  @Query(() => [User], { name: 'users' })
  async findAll(@Args() dto: FindManyUserArgs) {
    return this.usersService.findAll(dto);
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args() dto: FindUniqueUserArgs) {
    return this.usersService.findOne(dto);
  }

  @ResolveField(() => [Post])
  async posts(@Parent() user: User) {
    return this.postsService.findAll({
      where: {
        userId: {
          equals: user.id,
        },
      },
    });
  }

  @ResolveField(() => [Comment])
  async comments(@Parent() user: User) {
    return this.commentsService.findAll({
      where: {
        userId: {
          equals: user.id,
        },
      },
    });
  }

  @ResolveField()
  async _count(@Parent() user: User) {
    return this.usersService.findCounts({
      where: {
        id: user.id,
      },
    });
  }
}
