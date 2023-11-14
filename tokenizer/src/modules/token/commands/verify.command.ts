import { Logger } from '@nestjs/common';
import { Command, CommandRunner } from 'nest-commander';

@Command({ name: 'verify-token-list', description: 'Verify token main list' })
export class TokenVerifyCommand extends CommandRunner {
  private readonly logger = new Logger(TokenVerifyCommand.name);

  async run(): Promise<void> {
    console.log('xoooooooooooo');
  }
}
