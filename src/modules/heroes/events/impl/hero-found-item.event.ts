import { IEvent } from 'nest-cqrs';

export class HeroFoundItemEvent implements IEvent {
    constructor(
        public readonly heroId: string,
        public readonly itemId: string) {}
}