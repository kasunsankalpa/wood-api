import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
    // constructor(private contentService: ContentService) { }

    // @Get()
    // async all() {
    //     return await this.contentService.all();
    // }

    // @Post()
    // async create(
    //     @Body('content') content: string,
    //     @Body('tid') tid: number,
    //     @Body('aid') aid: number,
    // ) {
    //     return await this.contentService.create({ content: content, tid: tid, aid: aid });
    // }

    // @Get(':id')
    // async get(@Param('id') id: number) {
    //     return await this.contentService.get(id);
    // }

    // @Put(':id')
    // async update(@Param('id') id: number, @Body('content') content: string) {
    //     return await this.contentService.update(id, { content: content });
    // }

    // @Delete('id')
    // async delete(@Param('id') id: number) {
    //     return await this.contentService.delete(id);
    // }

}
