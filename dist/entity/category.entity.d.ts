import { SubCategory } from "./subCategory.entity";
export declare class Category {
    id: number;
    category: string;
    status: number;
    subCategorys: SubCategory[];
}
