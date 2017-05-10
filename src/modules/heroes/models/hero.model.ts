import { AggregateRoot } from 'nest-cqrs';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';

export class Hero extends AggregateRoot {
    constructor(private readonly id: string) {
        super();
    }

    killEnemy(enemyId: string) {
        this.apply(new HeroKilledDragonEvent(this.id, enemyId));
    }

    addItem(itemId: string) {
        this.apply(new HeroFoundItemEvent(this.id, itemId));
    }
}