import { Ctype } from 'src/entity/ctype.entity';
import { Repository } from 'typeorm';
export declare class CtypeService {
    private readonly ctypeRepository;
    constructor(ctypeRepository: Repository<Ctype>);
    all(): Promise<Ctype[]>;
    create(data: any): Promise<Ctype>;
    get(id: number): Promise<Ctype>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
