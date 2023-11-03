import { Module } from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksResolver } from './books.resolver';
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  providers: [BooksService, BooksResolver],
  imports: [PrismaModule],

})
export class BooksModule {}
