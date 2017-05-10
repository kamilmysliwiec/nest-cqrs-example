import { Component } from 'nest.js';
import { Hero } from '../models/hero.model';

const FakeUser = new Hero('0');

@Component()
export class HeroRepository {
    findOneById(id: number): Hero {
        return FakeUser;
    }
}