import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
// import { MysqlConn } from 'src/util/connection';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
    ) { }

    async all(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    async creage(data): Promise<Category> {
        return this.categoryRepository.save(data);
    }

    async get(id: number): Promise<Category> {
        return this.categoryRepository.findOne({ id });
    }

    async findByIds(ids): Promise<Category[]> {
        return this.categoryRepository.findByIds(ids);
    }

    async update(id: number, data): Promise<any> {
        return this.categoryRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.categoryRepository.delete({ id });
    }


    // async selectAll(): Promise<any> {
    //     let connection = MysqlConn.getConnection();
    //     return new Promise((res, rej) => {
    //         connection.execute("select * from page", (e, results) => {
    //             if (e) throw e;
    //             //  console.log(results);
    //             res(results);
    //         });
    //     })
    // }


}
