import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ComService } from './com.service';

@Controller('com')
export class ComController {
    constructor(
        private comservise: ComService
    ) { }

    @Post()
    async create(@Body('com') com) {       
        return await this.comservise.createProduct(com);
    }

    @Get('product/:productId')
    async getfeturesbyproductid(@Param('productId') productId :number) {
        return await this.comservise.getbyproid(productId);
    }
}
