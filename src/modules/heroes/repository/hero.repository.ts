import { Component } from 'nest.js';
import { Hero } from '../models/hero.model';

const fakeUser = new Hero('0');

@Component()
export class HeroRepository {
    findOneById(id: number): Hero {
        return fakeUser;
    }
}