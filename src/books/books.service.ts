import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { NewBook, UpdateBook } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany({});
  }

  async create(input: NewBook): Promise<Book> {
    return this.prisma.book.create({
      data: input,
    });
  }

  async update(params: UpdateBook): Promise<Book> {
    const { id, ...params_without_id } = params;

    return this.prisma.book.update({
      where: {
        id,
      },
      data: {
        ...params_without_id,
      },
    });
  }

  async delete(id: string): Promise<Book> {
    return this.prisma.book.delete({
      where: {
        id,
      },
    });
  }

}
