import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-auth0";
import { AuthService } from "./auth.service";
import { PassportStrategy } from "@nestjs/passport";

const Auth0StrategyBase = PassportStrategy(Strategy, "auth0");

@Injectable()
export class Auth0Strategy extends Auth0StrategyBase {
  constructor(private authService: AuthService) {
    super({
      domain: "YOUR_AUTH0_DOMAIN",
      clientID: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
      callbackURL: "YOUR_CALLBACK_URL",
    });
  }

  async validate(profile, done) {
    const user = await this.authService.validateUser(profile);
    if (!user) {
      return done("Unauthorized", false);
    }
    return done(null, user);
  }
}
