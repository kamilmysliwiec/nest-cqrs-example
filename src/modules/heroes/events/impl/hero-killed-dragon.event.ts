import { IEvent } from 'nest-cqrs';

export class HeroKilledDragonEvent implements IEvent {
    constructor(
        public readonly heroId: string,
        public readonly dragonId: string) {}
}