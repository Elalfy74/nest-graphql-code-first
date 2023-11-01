import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { LoginArgs, Token } from './dtos';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Token)
  async login(@Args() dto: LoginArgs): Promise<Token> {
    return this.authService.login(dto);
  }
}
