import { Controller, Get, UseGuards, Req, Res } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  @Get("login")
  @UseGuards(AuthGuard("auth0"))
  login() {
    // Initiates the Auth0 login flow

  }

  @Get("callback")
  @UseGuards(AuthGuard("auth0"))
  callback(@Req() req, @Res() res) {
    res.redirect("/");
  }
}
