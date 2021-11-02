import { CategoryService } from './category.service';
import { SubCategoryService } from './sub-category.service';
export declare class CategoryController {
    private categoryService;
    private subCategoryService;
    constructor(categoryService: CategoryService, subCategoryService: SubCategoryService);
    all(): Promise<import("../entity/category.entity").Category[]>;
    create(category: string): Promise<import("../entity/category.entity").Category>;
    createSub(cid: number, subCategory: string): Promise<import("../entity/subCategory.entity").SubCategory>;
}
