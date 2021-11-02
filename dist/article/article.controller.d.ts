import { ContentService } from 'src/content/content.service';
import { ArticleService } from './article.service';
import { ArticleCreateDto } from './ArticleCreateDto.dto';
export declare class ArticleController {
    private articleService;
    private contentService;
    constructor(articleService: ArticleService, contentService: ContentService);
    all(): Promise<import("../entity/article.entity").Article[]>;
    create(article: ArticleCreateDto): Promise<import("../entity/article.entity").Article>;
}
