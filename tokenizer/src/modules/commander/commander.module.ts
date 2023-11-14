import { Module } from '@nestjs/common';

import { TokenSyncCommand } from './sync.command';
import { TokenVerifyCommand } from './verify.command';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [TokenModule],
  providers: [TokenSyncCommand, TokenVerifyCommand],
})
export class CommanderModule {}
