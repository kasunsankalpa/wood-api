import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PageService } from './page.service';
import { PageCreateDto } from './PageCreateDto.dto';

@Controller('page')
export class PageController {
    constructor(
        private pageService: PageService
    ) { }

    @Get()
    async all() {
        return this.pageService.all();
    }

    @Post()
    async create(
        @Body('page') page: PageCreateDto
    ) {
        // return page.page;
        return this.pageService.create({ page: page.page });
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.pageService.get(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('page') page: string
    ) {
        return this.pageService.update(id, { page });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        console.log("delet controller caled" + id);
        return this.pageService.delete(id);
    }

}
