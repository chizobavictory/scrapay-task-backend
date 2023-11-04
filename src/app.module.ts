import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { BooksModule } from "./books/books.module";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.graphql"],
      installSubscriptionHandlers: true,
    }),
    BooksModule,
    UsersModule,
    AuthModule,
    AuthzModule,
  ],
})
export class AppModule {}
