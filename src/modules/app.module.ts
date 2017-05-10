import { Module } from 'nest.js';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
    modules: [ HeroesGameModule ]
})
export class ApplicationModule {}