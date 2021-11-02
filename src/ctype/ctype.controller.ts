import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CtypeService } from './ctype.service';

@Controller('ctype')
export class CtypeController {
    constructor(private ctypeService: CtypeService) { }

    @Get()
    async all() {
        return await this.ctypeService.all();
    }

    @Post()
    async create(@Body('ctype') ctype: string) {
        return await this.ctypeService.create({ ctype: ctype });
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return await this.ctypeService.get(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body('ctype') ctype: string) {
        return await this.ctypeService.update(id, { ctype: ctype });
    }

    @Delete('id')
    async delete(@Param('id') id: number) {
        return await this.ctypeService.delete(id);
    }



}
