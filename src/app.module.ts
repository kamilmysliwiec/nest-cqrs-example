import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [HeroesGameModule],
})
export class ApplicationModule {}
