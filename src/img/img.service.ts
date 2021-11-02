import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Img } from 'src/entity/img.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImgService {
    constructor(
        @InjectRepository(Img) private readonly imgRepository: Repository<Img>,
    ) { }

    async getone(productId): Promise<Img[]> {
        return this.imgRepository.find(productId);
    }

    async getbyproid(productId): Promise<Img[]> {
        return await this.imgRepository.find({ where: { product: productId } });
    }
}
