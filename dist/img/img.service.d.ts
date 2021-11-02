import { Img } from 'src/entity/img.entity';
import { Repository } from 'typeorm';
export declare class ImgService {
    private readonly imgRepository;
    constructor(imgRepository: Repository<Img>);
    getone(productId: any): Promise<Img[]>;
    getbyproid(productId: any): Promise<Img[]>;
}
