import { Component } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { KillDragonCommand } from './commands/impl/kill-dragon.command';

@Component()
export class HeroesGameService {
    constructor(private commandBus: CommandBus) {}

    async killDragon(heroId: string, killDragonDto: KillDragonDto) {
        return await this.commandBus.execute(
            new KillDragonCommand(heroId, killDragonDto.dragonId)
        );
    }
}