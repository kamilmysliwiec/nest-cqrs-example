import * as clc from 'cli-color';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ICommand, EventObservable } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { DropAncientItemCommand } from '../commands/impl/drop-ancient-item.command';
import { delay, map } from 'rxjs/operators';

const itemId = '0';

@Injectable()
export class HeroesGameSagas {
  dragonKilled = (events$: EventObservable<any>): Observable<ICommand> => {
    return events$
      .ofType(HeroKilledDragonEvent)
      .pipe(
        delay(1000),
        map(event => {
          console.log(clc.redBright('Inside [HeroesGameSagas] Saga'));
          return new DropAncientItemCommand(event.heroId, itemId);
        }),
      );
  }
}
