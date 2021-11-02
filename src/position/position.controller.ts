import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { pid } from 'node:process';
import { PageService } from 'src/page/page.service';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {

    constructor(
        private positionService: PositionService,
        private pageService: PageService
    ) { }

    @Post()
    async create(
        @Body('pid') pid: number,
        @Body('position') position: string
    ) {
        const page = await this.pageService.get(pid);
        // return page;
        console.log(page);
        return this.positionService.create(position, page);
    }


    @Get()
    async all() {
        return this.positionService.all();
    }

}
