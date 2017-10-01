import { Component } from '@nestjs/common';
import { Hero } from '../models/hero.model';
import { userHero } from './fixtures/user';

@Component()
export class HeroRepository {
  async findOneById(id: number): Promise<Hero> {
    return userHero;
  }
}
