import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { SubCategoryService } from 'src/category/sub-category.service';
import { ContentService } from 'src/content/content.service';
import { Article } from 'src/entity/article.entity';
import { Category } from 'src/entity/category.entity';
import { Page } from 'src/entity/page.entity';
import { Position } from 'src/entity/position.entity';
import { SubCategory } from 'src/entity/subCategory.entity';
import { PageService } from 'src/page/page.service';
import { PositionService } from 'src/position/position.service';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article) private readonly articleRepository: Repository<Article>,
        private pageService: PageService,
        private positionService: PositionService,
        private categoryService: CategoryService,
        private subCategoryService: SubCategoryService,

    ) {

    }

    async all(): Promise<Article[]> {
        return this.articleRepository.find({ relations: ["categorys", "subCategorys", "pages", "positions", "contents"] });
    }



    async get(id: number): Promise<Article> {
        return this.articleRepository.findOne({ id });
    }

    async update(id: number, data): Promise<any> {
        return this.articleRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.articleRepository.delete({ id });
    }

    async creage(data): Promise<Article> {
        let article = new Article();
        article.title = data.title;
        article.subtitle = data.subtitle;
        article.description = data.description;
        if (data.price1 > 0) article.price1 = data.price1;
        if (data.price2 > 0) article.price2 = data.price2;
        if (data.price3 > 0) article.price3 = data.price3;
        if (data.discount1 > 0) article.discount1 = data.discount1;
        if (data.discount2 > 0) article.discount2 = data.discount2;
        if (data.discount3 > 0) article.discount3 = data.discount3;
        article.auther = data.auther;
        article.user = 1;
        let datetime = new Date().toLocaleString();
        article.date = datetime;
        article.link = data.link;

        let pages: Page[] = await this.pageService.findByIds(data.pages);
        article.pages = pages;

        let positions: Position[] = await this.positionService.findByIds(data.positions);
        article.positions = positions;

        let categorys: Category[] = await this.categoryService.findByIds(data.categorys);
        article.categorys = categorys;

        let subCategorys: SubCategory[] = await this.subCategoryService.findByids(data.subCategorys);
        article.subCategorys = subCategorys;

        return await this.articleRepository.save(article);;

    }

}
