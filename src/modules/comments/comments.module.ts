import { forwardRef, Module } from '@nestjs/common';

import { PostsModule } from '../posts/posts.module';
import { UsersModule } from '../users/users.module';
import { CommentsResolver } from './comments.resolver';
import { CommentsService } from './comments.service';

@Module({
  imports: [forwardRef(() => UsersModule), forwardRef(() => PostsModule)],
  providers: [CommentsResolver, CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
