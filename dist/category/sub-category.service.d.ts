import { SubCategory } from 'src/entity/subCategory.entity';
import { Repository } from 'typeorm';
export declare class SubCategoryService {
    private readonly subCategoryRepository;
    constructor(subCategoryRepository: Repository<SubCategory>);
    all(): Promise<SubCategory[]>;
    create(data: any, category: any): Promise<SubCategory>;
    get(id: number): Promise<SubCategory>;
    findByids(ids: any): Promise<SubCategory[]>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
