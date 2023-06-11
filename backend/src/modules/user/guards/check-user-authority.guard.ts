import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class CheckUserAuthority implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userIdFromToken = request.user.id;
    const userIdFromParams = request.params.id;

    if (userIdFromToken !== userIdFromParams) {
      throw new UnauthorizedException(
        'You do not have permission to do this action.',
      );
    }

    return true;
  }
}
