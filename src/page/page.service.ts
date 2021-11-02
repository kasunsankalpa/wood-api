import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from '../entity/page.entity';

@Injectable()
export class PageService {

    constructor(
        @InjectRepository(Page) private readonly pageRepository: Repository<Page>
    ) { }


    async all(): Promise<Page[]> {
        return this.pageRepository.find();
    }

    async create(data): Promise<Page> {
        return this.pageRepository.save(data);
    }

    async get(id: number): Promise<Page> {
        return await this.pageRepository.findOne({ id });
    }

    async findByIds(ids): Promise<Page[]> {
        return await this.pageRepository.findByIds(ids);
    }

    async update(id: number, data): Promise<any> {
        return this.pageRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.pageRepository.delete({ id });
    }


}
