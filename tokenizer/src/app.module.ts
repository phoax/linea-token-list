import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { LoggerModule } from 'nestjs-pino';

import config from 'src/config/config';
// import type { LogConfig } from 'src/config/config.interface';
import { configValidator } from 'src/config/config.validator';
import { LoggerModule } from 'src/modules/logger/logger.module';
import { TokenModule } from 'src/modules/token/token.module';
import { CommanderModule } from 'src/modules/commander/commander.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: configValidator,
    }),
    LoggerModule,
    CommanderModule,
    TokenModule,
  ],
  controllers: [],
})
export class AppModule {}
