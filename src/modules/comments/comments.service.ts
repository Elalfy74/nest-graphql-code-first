import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  Comment,
  CreateOneCommentArgs,
  DeleteOneCommentArgs,
  FindManyCommentArgs,
  FindUniqueCommentArgs,
  UpdateOneCommentArgs,
} from 'src/@generated/comment';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateOneCommentArgs): Promise<Comment> {
    return this.prisma.comment.create(dto);
  }

  async findAll(dto: FindManyCommentArgs): Promise<Comment[]> {
    return this.prisma.comment.findMany(dto);
  }

  async findOne(dto: FindUniqueCommentArgs): Promise<Comment> {
    return this.prisma.comment.findUnique(dto);
  }

  async update(dto: UpdateOneCommentArgs): Promise<Comment> {
    return this.prisma.comment.update(dto);
  }

  async remove(dto: DeleteOneCommentArgs): Promise<Comment> {
    return this.prisma.comment.delete(dto);
  }
}
