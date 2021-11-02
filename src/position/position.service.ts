import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from '../entity/position.entity';
import { Page } from '../entity/page.entity';

@Injectable()
export class PositionService {
    constructor(
        @InjectRepository(Position) private readonly positionRepository: Repository<Position>
    ) { }


    async all(): Promise<Position[]> {
        return this.positionRepository.find({ relations: ["page"] });
    }

    async create(data, page): Promise<Position> {
        const position = new Position();
        position.position = data;
        position.page = page;
        return this.positionRepository.save(position);
    }

    async get(id: number): Promise<Position> {
        return this.positionRepository.findOne({ id });
    }

    async findByIds(ids): Promise<Position[]> {
        return await this.positionRepository.findByIds(ids);
    }

    async update(id: number, data): Promise<any> {
        return this.positionRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.positionRepository.delete({ id });
    }

}
