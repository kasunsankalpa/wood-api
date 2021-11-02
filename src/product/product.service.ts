import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/Product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly ProductRepository: Repository<Product>,
    ) { }

    async creage(data): Promise<Product> {
        return this.ProductRepository.save(data);
    }

    async all(): Promise<Product[]> {
        return this.ProductRepository.find();
    }

    async getone(id): Promise<Product[]> {
        return this.ProductRepository.findByIds(id);
    }



  
}
