import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieTypeormConfig } from './config/movie-orm.config'
import { Movies } from './models/Movies.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(MovieTypeormConfig),
    TypeOrmModule.forFeature([
      Movies
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
