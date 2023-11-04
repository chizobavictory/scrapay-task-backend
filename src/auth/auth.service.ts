import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async validateUser(profile): Promise<any> {
    // Implement user validation logic (e.g., check if the user exists in your database)
    // Return the user object or null
    const user = await this.prismaService.user.findUnique({
      where: {
        id: profile.id,
      },
    });
    if (!user) {
      return null;
    }
    return user;
  }
}
