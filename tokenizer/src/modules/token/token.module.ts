import { Module } from '@nestjs/common';

import { TokenService } from './services/token.service';
import { TokenVerifyService } from './services/verify.service';
import { TokenSyncService } from './services/sync.service';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [LoggerModule],
  providers: [TokenService, TokenVerifyService, TokenSyncService],
  exports: [TokenSyncService, TokenVerifyService],
})
export class TokenModule {}
