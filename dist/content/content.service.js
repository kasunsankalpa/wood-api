"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const article_service_1 = require("../article/article.service");
const ctype_service_1 = require("../ctype/ctype.service");
const content_entity_1 = require("../entity/content.entity");
const typeorm_2 = require("typeorm");
let ContentService = class ContentService {
    constructor(contentRepository, ctypeService, articleService) {
        this.contentRepository = contentRepository;
        this.ctypeService = ctypeService;
        this.articleService = articleService;
    }
    async all() {
        return this.contentRepository.find();
    }
    async create(article, data) {
        let ctype = await this.ctypeService.get(data.tid);
        let content = new content_entity_1.Content();
        content.ctype = ctype;
        content.content = data.content;
        content.articles = article;
        return await this.contentRepository.save(content);
    }
    async get(id) {
        return this.contentRepository.findOne(id);
    }
    async update(id, data) {
        return this.contentRepository.update(id, data);
    }
    async delete(id) {
        return this.contentRepository.delete(id);
    }
};
ContentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(content_entity_1.Content)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ctype_service_1.CtypeService,
        article_service_1.ArticleService])
], ContentService);
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map