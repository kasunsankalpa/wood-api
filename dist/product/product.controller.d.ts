import { ProductService } from './product.service';
export declare class ProductController {
    private ProductService;
    constructor(ProductService: ProductService);
    create(product: any): Promise<import("../entity/Product.entity").Product>;
    all(): Promise<import("../entity/Product.entity").Product[]>;
    getOne(id: any): Promise<import("../entity/Product.entity").Product[]>;
}
