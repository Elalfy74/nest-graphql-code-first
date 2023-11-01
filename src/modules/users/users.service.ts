import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
} from 'src/@generated/user';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(dto);
  }

  async findAll(dto: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(dto);
  }

  async findOne(dto: FindUniqueUserArgs): Promise<User> {
    return this.prisma.user.findUnique(dto);
  }

  async findCounts(dto: FindUniqueUserArgs): Promise<User['_count']> {
    return (
      await this.prisma.user.findUnique({
        ...dto,
        select: {
          _count: true,
        },
      })
    )._count;
  }
}
