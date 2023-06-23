import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module.js';

@Module({
  imports: [HeroesGameModule],
})
export class ApplicationModule {}
