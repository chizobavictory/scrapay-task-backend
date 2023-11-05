import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { Book, NewBook, UpdateBook } from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';
import { BooksService } from './books.service';

const pubSub = new PubSub();


@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query('books')
  async posts(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query('book')
  async post(@Args('id') args: string): Promise<Book> {
    return this.booksService.findOne(args);
  }

  @Mutation('createBook')
  async create(@Args('input') args: NewBook): Promise<Book> {
    const createdBook = await this.booksService.create(args);
    pubSub.publish('bookCreated', { bookCreated: createdBook });
    return createdBook;
  }

  @Mutation('updateBook')
  async update(@Args('input') args: UpdateBook): Promise<Book> {
    return this.booksService.update(args);
  }

  @Mutation('deleteBook')
  async delete(@Args('id') args: string): Promise<Book> {
    return this.booksService.delete(args);
  }

  @Subscription('bookCreated')
  bookCreated() {
    return pubSub.asyncIterator('bookCreated');
  }
}
