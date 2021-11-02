import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ctype } from 'src/entity/ctype.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CtypeService {
    constructor(
        @InjectRepository(Ctype) private readonly ctypeRepository: Repository<Ctype>
    ) { }

    async all(): Promise<Ctype[]> {
        return this.ctypeRepository.find();
    }

    async create(data): Promise<Ctype> {
        return this.ctypeRepository.save(data);
    }

    async get(id: number): Promise<Ctype> {
        return this.ctypeRepository.findOne({ id });
    }

    async update(id: number, data): Promise<any> {
        return this.ctypeRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.ctypeRepository.delete({ id });
    }


}
