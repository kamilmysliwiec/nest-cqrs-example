import { Component } from 'nest.js';
import { IEventHandler } from 'nest-cqrs';
import { HeroFoundItemEvent } from '../impl/hero-found-item.event';
const clc = require('cli-color');

@Component()
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
    handle(event: HeroFoundItemEvent) {
        console.log(clc.yellowBright('Async HeroFoundItemEvent...'));
    }
}