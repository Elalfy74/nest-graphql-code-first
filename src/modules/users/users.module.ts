import { forwardRef, Module } from '@nestjs/common';

import { CommentsModule } from '../comments/comments.module';
import { PostsModule } from '../posts/posts.module';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [forwardRef(() => PostsModule), forwardRef(() => CommentsModule)],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
