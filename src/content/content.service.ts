import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleService } from 'src/article/article.service';
import { CtypeService } from 'src/ctype/ctype.service';
import { Content } from 'src/entity/content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(Content) private readonly contentRepository: Repository<Content>,
        private ctypeService: CtypeService,
        private articleService: ArticleService
    ) { }


    async all(): Promise<Content[]> {
        return this.contentRepository.find()
    }

    async create(article, data): Promise<Content> {
        let ctype = await this.ctypeService.get(data.tid);
        let content = new Content();
        content.ctype = ctype;
        content.content = data.content;
        content.articles = article;
        return await this.contentRepository.save(content);
    }

    async get(id: number): Promise<Content> {
        return this.contentRepository.findOne(id)
    }

    async update(id: number, data): Promise<any> {
        return this.contentRepository.update(id, data)
    }

    async delete(id: number): Promise<any> {
        return this.contentRepository.delete(id)
    }

}
