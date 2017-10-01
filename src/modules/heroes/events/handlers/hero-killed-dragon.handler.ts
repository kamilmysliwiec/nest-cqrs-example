import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../impl/hero-killed-dragon.event';

const clc = require('cli-color');

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
  handle(event: HeroKilledDragonEvent) {
    console.log(clc.greenBright('HeroKilledDragonEvent...'));
  }
}
