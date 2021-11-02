import { Repository } from 'typeorm';
import { Page } from '../entity/page.entity';
export declare class PageService {
    private readonly pageRepository;
    constructor(pageRepository: Repository<Page>);
    all(): Promise<Page[]>;
    create(data: any): Promise<Page>;
    get(id: number): Promise<Page>;
    findByIds(ids: any): Promise<Page[]>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
