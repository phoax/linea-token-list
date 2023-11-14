import { Module } from '@nestjs/common';

import { TokenService } from './token.service';
import { TokenSyncCommand } from './commands/sync.command';
import { TokenVerifyCommand } from './commands/verify.command';

@Module({
  imports: [],
  providers: [TokenService, TokenSyncCommand, TokenVerifyCommand],
})
export class TokenModule {}
