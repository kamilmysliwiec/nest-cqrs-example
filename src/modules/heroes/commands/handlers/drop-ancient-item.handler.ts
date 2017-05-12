import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { DropAncientItemCommand } from '../impl/drop-ancient-item.command';
import { HeroRepository } from '../../repository/hero.repository';

const clc = require('cli-color');

@CommandHandler(DropAncientItemCommand)
export class DropAncientItemHandler implements ICommandHandler<DropAncientItemCommand> {
    constructor(
        private readonly repository: HeroRepository,
        private readonly publisher: EventPublisher) {}

    execute(command: DropAncientItemCommand, resolve: (value?) => void) {
        console.log(clc.yellowBright('Async DropAncientItemCommand...'));

        const { heroId, itemId } = command;
        const hero = this.publisher.mergeObjectContext(
            this.repository.findOneById(+heroId)
        );
        hero.addItem(itemId);
        resolve();
    }
}