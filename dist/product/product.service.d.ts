import { Product } from 'src/entity/Product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly ProductRepository;
    constructor(ProductRepository: Repository<Product>);
    creage(data: any): Promise<Product>;
    all(): Promise<Product[]>;
    getone(id: any): Promise<Product[]>;
}
