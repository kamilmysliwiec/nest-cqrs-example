import { Component } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { ICommand, EventObservable } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { DropAncientItemCommand } from '../commands/impl/drop-ancient-item.command';

const clc = require('cli-color');
const itemId = '0';

@Component()
export class HeroesGameSagas {
  dragonKilled = (events$: EventObservable<any>): Observable<ICommand> => {
    return events$
      .ofType(HeroKilledDragonEvent)
      .delay(1000)
      .map(event => {
        console.log(clc.redBright('Inside [HeroesGameSagas] Saga'));
        return new DropAncientItemCommand(event.heroId, itemId);
      });
  }
}
