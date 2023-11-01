import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

export class AuthorizationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);

    const { req } = ctx.getContext();
    const args = ctx.getArgs();

    if (req.user.id === args.data.user.connect.id) {
      return true;
    }
    return false;
  }
}
