import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { BooksModule } from "./books/books.module";
import { UsersModule } from "./users/users.module";
import { AuthzModule } from "./authz/authz.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.graphql"],
      installSubscriptionHandlers: true,
    }),
    BooksModule,
    UsersModule,
    AuthzModule,
  ],
})
export class AppModule {}
