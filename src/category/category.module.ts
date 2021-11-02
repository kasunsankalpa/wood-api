import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SubCategoryService } from './sub-category.service';
import { Category } from 'src/entity/category.entity';
import { SubCategory } from 'src/entity/subCategory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/entity/article.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, SubCategory, Article])
  ],
  providers: [CategoryService, SubCategoryService],
  controllers: [CategoryController]
})
export class CategoryModule { }
