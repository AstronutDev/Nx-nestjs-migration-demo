import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('movies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getmovies () {
    console.log('call');
    
    return this.appService.getMovies()
  }

  @Post()
  createMovie(
    @Body('name') name: string,
    @Body('director') director: string
  ) {
    return this.appService.createMovie(name, director)
  }
}
