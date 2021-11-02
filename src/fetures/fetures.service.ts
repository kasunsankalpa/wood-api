import { Injectable } from '@nestjs/common';
import { Feture } from 'src/entity/Feture.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeturesService {

    constructor(
        @InjectRepository(Feture) private readonly FetureRepository: Repository<Feture>,
    ) { }

    async getone(id): Promise<Feture[]> {
        return this.FetureRepository.findByIds(id);
    }

    async getbyproid(productId): Promise<Feture[]> {
        return await this.FetureRepository.find({ where: { product: productId } });
    }
}
