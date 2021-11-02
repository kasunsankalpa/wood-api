import { Category } from 'src/entity/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    all(): Promise<Category[]>;
    creage(data: any): Promise<Category>;
    get(id: number): Promise<Category>;
    findByIds(ids: any): Promise<Category[]>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
