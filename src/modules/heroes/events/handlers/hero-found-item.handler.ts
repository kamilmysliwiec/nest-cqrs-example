import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from '../impl/hero-found-item.event';

const clc = require('cli-color');

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
  handle(event: HeroFoundItemEvent) {
    console.log(clc.yellowBright('Async HeroFoundItemEvent...'));
  }
}
