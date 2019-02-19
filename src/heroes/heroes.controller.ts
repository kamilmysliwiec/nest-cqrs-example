import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HeroesGameService } from './heroes.service';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { Hero } from './models/hero.model';

@Controller('hero')
export class HeroesGameController {
  constructor(private readonly heroesService: HeroesGameService) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    await this.heroesService.killDragon(id, dto);
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }
}
