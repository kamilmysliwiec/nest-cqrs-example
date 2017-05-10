import { Component } from 'nest.js';
import { IEventHandler } from 'nest-cqrs';
import { HeroKilledDragonEvent } from '../impl/hero-killed-dragon.event';
const clc = require('cli-color');

@Component()
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
    handle(event: HeroKilledDragonEvent) {
        console.log(clc.greenBright('HeroKilledDragonEvent...'));
    }
}