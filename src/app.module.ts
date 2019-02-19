import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [CqrsModule.forRoot(), HeroesGameModule],
})
export class ApplicationModule {}
