import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  CreateOnePostArgs,
  DeleteOnePostArgs,
  FindManyPostArgs,
  FindUniquePostArgs,
  Post,
  UpdateOnePostArgs,
} from 'src/@generated/post';
import { User } from 'src/@generated/user';
import { AuthorizationGuard, JwtGuard } from 'src/common';

import { UsersService } from '../users/users.service';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Post)
  @UseGuards(JwtGuard, AuthorizationGuard)
  createPost(@Args() dto: CreateOnePostArgs) {
    return this.postsService.create(dto);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll(@Args() dto: FindManyPostArgs) {
    return this.postsService.findAll(dto);
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args() dto: FindUniquePostArgs) {
    return this.postsService.findOne(dto);
  }

  @Mutation(() => Post)
  updatePost(@Args() dto: UpdateOnePostArgs) {
    return this.postsService.update(dto);
  }

  @Mutation(() => Post)
  removePost(@Args() dto: DeleteOnePostArgs) {
    return this.postsService.remove(dto);
  }

  @ResolveField(() => User)
  user(@Parent() post: Post) {
    return this.usersService.findOne({
      where: {
        id: post.userId,
      },
    });
  }

  @ResolveField()
  _count(@Parent() post: Post) {
    return this.postsService.findCounts({
      where: {
        id: post.id,
      },
    });
  }
}
