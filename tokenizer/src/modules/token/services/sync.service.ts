import { Injectable } from '@nestjs/common';

import { LoggerService } from 'src/modules/logger/logger.service';

@Injectable()
export class TokenSyncService {
  constructor(
    // private readonly boundWalletsService: BoundWalletsService,
    private loggerService: LoggerService,
  ) {}

  startSync() {
    //
    this.loggerService.logger.error('XXOOO');
  }
}
