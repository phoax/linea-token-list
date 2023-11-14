import { Injectable } from '@nestjs/common';
import { Logger, createLogger, format, transports } from 'winston';

@Injectable()
export class LoggerService {
  logger: Logger;
  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.json(),
      defaultMeta: { service: 'lineaxp-api' },
      transports: [new transports.Console()],
    });
  }
}
