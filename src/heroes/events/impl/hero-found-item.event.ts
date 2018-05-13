import { IEvent } from '@nestjs/cqrs';

export class HeroFoundItemEvent implements IEvent {
    constructor(
        public readonly heroId: string,
        public readonly itemId: string) {}
}