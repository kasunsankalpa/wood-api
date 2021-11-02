import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubCategory } from 'src/entity/subCategory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubCategoryService {
    constructor(
        @InjectRepository(SubCategory) private readonly subCategoryRepository: Repository<SubCategory>
    ) { }

    async all(): Promise<SubCategory[]> {
        return this.subCategoryRepository.find({ relations: ["category"] });
    }

    async create(data, category): Promise<SubCategory> {
        const sub = new SubCategory();
        sub.subCategory = data;
        sub.category = category;
        return this.subCategoryRepository.save(sub);
    }

    async get(id: number): Promise<SubCategory> {
        return this.subCategoryRepository.findOne({ id });
    }

    async findByids(ids): Promise<SubCategory[]> {        
        return this.subCategoryRepository.findByIds(ids);
    }

    async update(id: number, data): Promise<any> {
        return this.subCategoryRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.subCategoryRepository.delete({ id });
    }


}
