import { Component } from 'nest.js';
import { EventPublisher, ICommandHandler } from 'nest-cqrs';
import { KillDragonCommand } from '../impl/kill-dragon.command';
import { HeroRepository } from '../../repository/hero.repository';
const clc = require('cli-color');

@Component()
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
    constructor(
        private readonly repository: HeroRepository,
        private readonly publisher: EventPublisher) {}

    execute(command: KillDragonCommand, resolve: (value?) => void) {
        console.log(clc.greenBright('KillDragonCommand...'));

        const { heroId, dragonId } = command;
        const hero = this.publisher.mergeObjectContext(
            this.repository.findOneById(+heroId)
        );
        hero.killEnemy(dragonId);
        resolve();
    }
}