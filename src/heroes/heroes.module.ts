import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers/index.js';
import { EventHandlers } from './events/handlers/index.js';
import { HeroesGameController } from './heroes.controller.js';
import { QueryHandlers } from './queries/handlers/index.js';
import { HeroRepository } from './repository/hero.repository.js';
import { HeroesGameSagas } from './sagas/heroes.sagas.js';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesGameController],
  providers: [
    HeroRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,
  ],
})
export class HeroesGameModule {}
