import { Module, OnModuleInit } from 'nest.js';
import { CommandBus, EventBus, EventPublisher } from 'nest-cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { HeroesGameController } from './heroes.controller';
import { HeroesGameService } from './heroes.service';
import { HeroRepository } from './repository/hero.repository';

@Module({
    controllers: [ HeroesGameController ],
    components: [
        CommandBus,
        EventBus,
        EventPublisher,
        HeroesGameService,
        HeroesGameSagas,
        ...CommandHandlers,
        ...EventHandlers,
        HeroRepository
    ]
})
export class HeroesGameModule implements OnModuleInit {
    constructor(
        private readonly command$: CommandBus,
        private readonly event$: EventBus,
        private readonly heroesGameSagas: HeroesGameSagas) {}

    onModuleInit() {
        this.event$.register(EventHandlers);
        this.command$.register(CommandHandlers);
        this.event$.combineSagas([
            this.heroesGameSagas.dragonKilled
        ]);
    }
}