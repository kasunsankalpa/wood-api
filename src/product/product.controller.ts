import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
const mysql = require('mysql2');

@Controller('product')
export class ProductController {
    constructor(
        private ProductService: ProductService
    ) { }

    @Post()
    async create(@Body('product') product) {
        return await this.ProductService.creage(product );
    }

    @Get()
    async all() {
        return await this.ProductService.all()
    }

    @Get(':id')
    async getOne(@Param('id') id) {
        return await this.ProductService.getone(id);
    }


}
