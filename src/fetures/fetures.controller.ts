import { Controller, Get, Param } from '@nestjs/common';
import { FeturesService } from './fetures.service';

@Controller('fetures')
export class FeturesController {
    constructor(
        private fetureservice: FeturesService
    ) { }

    @Get(':id')
    async getOne(@Param('id') id) {
        return await this.fetureservice.getone(id);
    }


    @Get('product/:productId')
    async getfeturesbyproductid(@Param('productId') productId :number) {
        return await this.fetureservice.getbyproid(productId);
    }

}
