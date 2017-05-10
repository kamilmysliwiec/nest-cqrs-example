import { Controller, Post, Response, Body, HttpStatus, Param } from 'nest.js';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { HeroesGameService } from './heroes.service';

@Controller('hero')
export class HeroesGameController {
    constructor(private heroesService: HeroesGameService) {}

    @Post(':id/kill')
    async killDragon(@Response() res, @Param('id') id: string, @Body() dto: KillDragonDto) {
        await this.heroesService.killDragon(id, dto);
        res.status(HttpStatus.OK).send();
    }
}