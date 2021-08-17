import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './models/movie.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>
  ) {}

  async getMovies() {
    return await this.movieRepo.find()
  }

  async createMovie(
    name: string,
    director: string
  ) {
    let movie = await this.movieRepo.create()
    movie.name = name
    movie.director = director

    try {
      await this.movieRepo.save(movie)
    } catch (error) {
      throw new HttpException('cant create', 400)
    }

  }
}
