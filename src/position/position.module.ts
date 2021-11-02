import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from 'src/entity/position.entity';
import { Page } from 'src/entity/page.entity';
import { PageService } from 'src/page/page.service';
import { Article } from 'src/entity/article.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Position, Page, Article])],
    providers: [PositionService, PageService],
    controllers: [PositionController]
})
export class PositionModule { }
