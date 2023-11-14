import { Command, CommandRunner } from 'nest-commander';
// import { TokenSyncService } from '../token/services/sync.service';

@Command({ name: 'sync-token-list', description: 'Sync token full list' })
export class TokenSyncCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log('xoooooooooooo');
    console.log('xoooooooooooo');
  }
}
