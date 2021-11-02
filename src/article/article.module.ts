import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/entity/article.entity';
import { PageService } from 'src/page/page.service';
import { PositionService } from 'src/position/position.service';
import { CategoryService } from 'src/category/category.service';
import { SubCategoryService } from 'src/category/sub-category.service';
import { Page } from 'src/entity/page.entity';
import { Category } from 'src/entity/category.entity';
import { SubCategory } from 'src/entity/subCategory.entity';
import { Position } from 'src/entity/position.entity';
import { Content } from 'src/entity/content.entity';
import { ContentService } from 'src/content/content.service';
import { Ctype } from 'src/entity/ctype.entity';
import { CtypeService } from 'src/ctype/ctype.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article, Page, Position, Category, SubCategory, Content, Ctype])
  ],
  providers: [ArticleService, PageService, PositionService, CategoryService, SubCategoryService, ContentService, CtypeService],
  controllers: [ArticleController]
})
export class ArticleModule { }
