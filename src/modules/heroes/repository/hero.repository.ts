import { Component } from '@nestjs/common';
import { Hero } from '../models/hero.model';

const fakeUser = new Hero('1234');

@Component()
export class HeroRepository {
    findOneById(id: number): Hero {
        return fakeUser;
    }
}