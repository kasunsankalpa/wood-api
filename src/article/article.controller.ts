import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContentService } from 'src/content/content.service';
import { ArticleService } from './article.service';
import { ArticleCreateDto } from './ArticleCreateDto.dto';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService,
        private contentService: ContentService,
    ) { }

    @Get()
    async all() {
        return await this.articleService.all();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(
        @Body('article') article: ArticleCreateDto
    ) {
        console.log(article);
        let created = await this.articleService.creage(article);

        article.contents.forEach(con => {
            this.contentService.create(created, con);
        });
        
        console.log(created);
        return created;
    }


}
