import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ActorModule } from './actor/actor.module';

@Module({
  imports: [MovieModule, ActorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
