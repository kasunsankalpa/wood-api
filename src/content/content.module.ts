import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from 'src/entity/content.entity';
import { CtypeService } from 'src/ctype/ctype.service';
import { ArticleService } from 'src/article/article.service';
import { Ctype } from 'src/entity/ctype.entity';
import { Article } from 'src/entity/article.entity';
import { Page } from 'src/entity/page.entity';
import { Position } from 'src/entity/position.entity';
import { Category } from 'src/entity/category.entity';
import { SubCategory } from 'src/entity/subCategory.entity';
import { PageService } from 'src/page/page.service';
import { CategoryService } from 'src/category/category.service';
import { SubCategoryService } from 'src/category/sub-category.service';
import { PositionService } from 'src/position/position.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Content, Ctype, Article, Page, Position, Category, SubCategory])
  ],
  providers: [ContentService, CtypeService, ArticleService, PageService, PositionService, CategoryService, SubCategoryService],
  controllers: [ContentController]
})
export class ContentModule { }
