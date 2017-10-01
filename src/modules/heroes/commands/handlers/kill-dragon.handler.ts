import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { KillDragonCommand } from '../impl/kill-dragon.command';
import { HeroRepository } from '../../repository/hero.repository';

const clc = require('cli-color');

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: KillDragonCommand, resolve: (value?) => void) {
    console.log(clc.greenBright('KillDragonCommand...'));

    const { heroId, dragonId } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+heroId),
    );
    hero.killEnemy(dragonId);
    hero.commit();
    resolve();
  }
}
