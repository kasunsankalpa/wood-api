import { PageService } from './page.service';
import { PageCreateDto } from './PageCreateDto.dto';
export declare class PageController {
    private pageService;
    constructor(pageService: PageService);
    all(): Promise<import("../entity/page.entity").Page[]>;
    create(page: PageCreateDto): Promise<import("../entity/page.entity").Page>;
    get(id: number): Promise<import("../entity/page.entity").Page>;
    update(id: number, page: string): Promise<any>;
    delete(id: number): Promise<any>;
}
