import { Controller, Get, Param } from '@nestjs/common';
import { ImgService } from './img.service';

@Controller('img')
export class ImgController {

    constructor(
        private imgService: ImgService
    ) { }

    @Get(':id')
    async getOne(@Param('id') productId) {
        return await this.imgService.getone(productId);
    }

    @Get('product/:productId')
    async getfeturesbyproductid(@Param('productId') productId :number) {
        return await this.imgService.getbyproid(productId);
    }
}
