import { Controller, Post, Body, Param } from '@nestjs/common';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { HeroesGameService } from './heroes.service';

@Controller('hero')
export class HeroesGameController {
  constructor(private readonly heroesService: HeroesGameService) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    await this.heroesService.killDragon(id, dto);
  }
}
