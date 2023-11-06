import { Module } from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksResolver } from './books.resolver';
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthzModule } from "src/authz/authz.module";

@Module({
  providers: [BooksService, BooksResolver],
  imports: [PrismaModule, AuthzModule],

})
export class BooksModule {}
