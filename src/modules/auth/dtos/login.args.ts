import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { LoginInput } from './login.input';

@ArgsType()
export class LoginArgs {
  @Field(() => LoginInput, { nullable: false })
  @Type(() => LoginInput)
  data!: LoginInput;
}
