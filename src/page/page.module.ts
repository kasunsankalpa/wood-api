import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageController } from './page.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from '../entity/page.entity';
import { Position } from 'src/entity/position.entity';
import { PositionService } from 'src/position/position.service';
import { Article } from 'src/entity/article.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Page, Position, Article])
  ],
  providers: [PageService, PositionService],
  controllers: [PageController]
})
export class PageModule { }
