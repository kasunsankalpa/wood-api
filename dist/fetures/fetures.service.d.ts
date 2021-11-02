import { Feture } from 'src/entity/Feture.entity';
import { Repository } from 'typeorm';
export declare class FeturesService {
    private readonly FetureRepository;
    constructor(FetureRepository: Repository<Feture>);
    getone(id: any): Promise<Feture[]>;
    getbyproid(productId: any): Promise<Feture[]>;
}
