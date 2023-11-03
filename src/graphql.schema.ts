
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

export class NewUser {
    username: string;
    password: string;
}

export class UpdateUser {
    id: string;
    username?: Nullable<string>;
    password?: Nullable<string>;
}

export class Book {
    id: string;
    name: string;
    description: string;
}

export abstract class IQuery {
    abstract books(): Book[] | Promise<Book[]>;

    abstract book(id: string): Nullable<Book> | Promise<Nullable<Book>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createBook(input: NewBook): Book | Promise<Book>;

    abstract updateBook(input: UpdateBook): Nullable<Book> | Promise<Nullable<Book>>;

    abstract deleteBook(id: string): Nullable<Book> | Promise<Nullable<Book>>;

    abstract createUser(input: NewUser): User | Promise<User>;

    abstract updateUser(input: UpdateUser): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class ISubscription {
    abstract bookCreated(): Nullable<Book> | Promise<Nullable<Book>>;

    abstract userCreated(): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    username: string;
    password: string;
}

type Nullable<T> = T | null;
