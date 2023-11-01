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
  Comment,
  CreateOneCommentArgs,
  DeleteOneCommentArgs,
  FindManyCommentArgs,
  FindUniqueCommentArgs,
  UpdateOneCommentArgs,
} from 'src/@generated/comment';
import { Post } from 'src/@generated/post';
import { User } from 'src/@generated/user';
import { AuthorizationGuard, JwtGuard } from 'src/common';

import { PostsService } from '../posts/posts.service';
import { UsersService } from '../users/users.service';
import { CommentsService } from './comments.service';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  @Mutation(() => Comment)
  @UseGuards(JwtGuard, AuthorizationGuard)
  createComment(@Args() dto: CreateOneCommentArgs) {
    return this.commentsService.create(dto);
  }

  @Query(() => [Comment], { name: 'comments' })
  findAll(@Args() dto: FindManyCommentArgs) {
    return this.commentsService.findAll(dto);
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args() dto: FindUniqueCommentArgs) {
    return this.commentsService.findOne(dto);
  }

  @Mutation(() => Comment)
  updateComment(@Args() dto: UpdateOneCommentArgs) {
    return this.commentsService.update(dto);
  }

  @Mutation(() => Comment)
  removeComment(@Args() dto: DeleteOneCommentArgs) {
    return this.commentsService.remove(dto);
  }

  @ResolveField(() => User)
  user(@Parent() comment: Comment) {
    return this.usersService.findOne({
      where: {
        id: comment.userId,
      },
    });
  }

  @ResolveField(() => Post)
  post(@Parent() comment: Comment) {
    return this.postsService.findOne({
      where: {
        id: comment.postId,
      },
    });
  }
}
