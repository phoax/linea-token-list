import { Logger } from '@nestjs/common';
import { Command, CommandRunner } from 'nest-commander';
import { TokenVerifyService } from 'src/modules/token/services/verify.service';

@Command({ name: 'verify-token-list', description: 'Verify token main list' })
export class TokenVerifyCommand extends CommandRunner {
  private readonly logger = new Logger(TokenVerifyCommand.name);

  constructor(private readonly tokenVerifyService: TokenVerifyService) {
    super();
  }

  async run(): Promise<void> {
    this.tokenVerifyService.startVerification();
  }
}
