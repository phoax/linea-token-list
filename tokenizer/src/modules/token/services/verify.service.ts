import { Injectable } from '@nestjs/common';

import { LoggerService } from 'src/modules/logger/logger.service';
@Injectable()
export class TokenVerifyService {
  constructor(
    // private readonly boundWalletsService: BoundWalletsService,
    private loggerService: LoggerService,
  ) {}

  startVerification() {
    //
    this.loggerService.logger.error('XXOOO');
  }
}
