import { Injectable } from '@nestjs/common';
import { Com } from 'src/entity/com.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComService {
    constructor(
        @InjectRepository(Com) private readonly comRepository: Repository<Com>,
    ) { }

    async createProduct(com): Promise<Com> {
        return await this.comRepository.save(com)
    }

    async getbyproid(productId): Promise<Com[]> {
        return await this.comRepository.find({ where: { product: productId } });
    }
}
