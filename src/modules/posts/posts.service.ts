import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateOnePostArgs,
  DeleteOnePostArgs,
  FindManyPostArgs,
  FindUniquePostArgs,
  Post,
  UpdateOnePostArgs,
} from 'src/@generated/post';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateOnePostArgs): Promise<Post> {
    return this.prisma.post.create(dto);
  }

  async findAll(dto: FindManyPostArgs): Promise<Post[]> {
    return this.prisma.post.findMany(dto);
  }

  async findOne(dto: FindUniquePostArgs): Promise<Post> {
    return this.prisma.post.findUnique(dto);
  }

  async update(dto: UpdateOnePostArgs): Promise<Post> {
    return this.prisma.post.update(dto);
  }

  async remove(dto: DeleteOnePostArgs): Promise<Post> {
    return this.prisma.post.delete(dto);
  }

  async findCounts(dto: FindUniquePostArgs): Promise<Post['_count']> {
    return (
      await this.prisma.post.findUnique({
        ...dto,
        select: {
          _count: true,
        },
      })
    )._count;
  }
}
