import { ArticleService } from 'src/article/article.service';
import { CtypeService } from 'src/ctype/ctype.service';
import { Content } from 'src/entity/content.entity';
import { Repository } from 'typeorm';
export declare class ContentService {
    private readonly contentRepository;
    private ctypeService;
    private articleService;
    constructor(contentRepository: Repository<Content>, ctypeService: CtypeService, articleService: ArticleService);
    all(): Promise<Content[]>;
    create(article: any, data: any): Promise<Content>;
    get(id: number): Promise<Content>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
