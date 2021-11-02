import { Com } from 'src/entity/com.entity';
import { Repository } from 'typeorm';
export declare class ComService {
    private readonly comRepository;
    constructor(comRepository: Repository<Com>);
    createProduct(com: any): Promise<Com>;
    getbyproid(productId: any): Promise<Com[]>;
}
