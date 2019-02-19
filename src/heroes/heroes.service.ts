import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './commands/impl/kill-dragon.command';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { Hero } from './models/hero.model';
import { GetHeroesQuery } from './queries/impl';

@Injectable()
export class HeroesGameService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async killDragon(heroId: string, killDragonDto: KillDragonDto) {
    return await this.commandBus.execute(
      new KillDragonCommand(heroId, killDragonDto.dragonId),
    );
  }

  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }
}
