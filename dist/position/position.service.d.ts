import { Repository } from 'typeorm';
import { Position } from '../entity/position.entity';
export declare class PositionService {
    private readonly positionRepository;
    constructor(positionRepository: Repository<Position>);
    all(): Promise<Position[]>;
    create(data: any, page: any): Promise<Position>;
    get(id: number): Promise<Position>;
    findByIds(ids: any): Promise<Position[]>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
