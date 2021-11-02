import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { SubCategoryService } from './sub-category.service';
const mysql = require('mysql2');

@Controller('category')
export class CategoryController {
    constructor(
        private categoryService: CategoryService,
        private subCategoryService: SubCategoryService
    ) { }


    @Get()
    async all() {
        return await this.categoryService.all()
    }

    @Post()
    async create(@Body('category') category: string) {
        return await this.categoryService.creage({ category: category });
    }

    @Post('/sub')
    async createSub(
        @Body('cid') cid: number,
        @Body('subCategory') subCategory: string
    ) {
        let cat = await this.categoryService.get(cid);
        return await this.subCategoryService.create(subCategory, cat);
    }

    // @Get('/query')
    // async query() {
    //     return await this.categoryService.selectAll();
    // }


}
