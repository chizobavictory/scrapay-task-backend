import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add custom logic here if needed, for example, checking additional conditions.

    // You can access the request object using context.switchToHttp().getRequest()
    // You can also access the user (if authenticated) using context.switchToHttp().getRequest().user

    return super.canActivate(context);
  }
}
