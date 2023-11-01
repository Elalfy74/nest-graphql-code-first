import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { LoginArgs, Token } from './dtos';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private readonly usersService: UsersService,
  ) {}

  // signup() {}

  async login({ data: { username, password } }: LoginArgs): Promise<Token> {
    const user = await this.usersService.findOne({
      where: {
        username,
      },
    });

    if (!user) throw new ForbiddenException('Invalid Email or Password');

    // Generate token and send response
    const token = await this.signToken({
      id: user.id,
      username: user.username,
    });

    return {
      token,
    };
  }

  private async signToken(payload: { id: string; username: string }) {
    const secret = 'secret';

    return this.jwt.signAsync(payload, {
      secret,
    });
  }
}
