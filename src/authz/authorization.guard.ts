import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTH0_AUDIENCE: string;
  private AUTH0_DOMAIN: string;

  constructor(private configService: ConfigService) {
    this.AUTH0_AUDIENCE = this.configService.get("AUTH0_AUDIENCE");
    this.AUTH0_DOMAIN = this.configService.get("AUTH0_DOMAIN");
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const token = req.headers.authorization.split(" ")[1]; // Assuming JWT is provided in the "Authorization" header

      const decoded = jwt.verify(token, this.AUTH0_AUDIENCE, {
        algorithms: ["RS256"],
        issuer: this.AUTH0_DOMAIN,
      });

      // You can access decoded user information here if needed
      req.user = decoded;

      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
