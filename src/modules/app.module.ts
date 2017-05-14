import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
    modules: [ HeroesGameModule ]
})
export class ApplicationModule {}