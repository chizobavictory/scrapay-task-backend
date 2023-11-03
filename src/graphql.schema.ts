/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewBook {
  name: string;
  description: string;
}

export class UpdateBook {
  id: string;
  name?: Nullable<string>;
  description?: Nullable<string>;
}

export class Book {
  id: string;
  name: string;
  description: string;
}

export abstract class IQuery {
  abstract books(): Book[] | Promise<Book[]>;

  abstract book(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
  abstract createBook(input: NewBook): Book | Promise<Book>;

  abstract updateBook(input: UpdateBook): Nullable<Book> | Promise<Nullable<Book>>;

  abstract deleteBook(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class ISubscription {
  abstract bookCreated(): Nullable<Book> | Promise<Nullable<Book>>;
}

type Nullable<T> = T | null;
