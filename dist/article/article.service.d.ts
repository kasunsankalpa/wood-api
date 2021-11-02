import { CategoryService } from 'src/category/category.service';
import { SubCategoryService } from 'src/category/sub-category.service';
import { Article } from 'src/entity/article.entity';
import { PageService } from 'src/page/page.service';
import { PositionService } from 'src/position/position.service';
import { Repository } from 'typeorm';
export declare class ArticleService {
    private readonly articleRepository;
    private pageService;
    private positionService;
    private categoryService;
    private subCategoryService;
    constructor(articleRepository: Repository<Article>, pageService: PageService, positionService: PositionService, categoryService: CategoryService, subCategoryService: SubCategoryService);
    all(): Promise<Article[]>;
    get(id: number): Promise<Article>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
    creage(data: any): Promise<Article>;
}
