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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_service_1 = require("../category/category.service");
const sub_category_service_1 = require("../category/sub-category.service");
const content_service_1 = require("../content/content.service");
const article_entity_1 = require("../entity/article.entity");
const category_entity_1 = require("../entity/category.entity");
const page_entity_1 = require("../entity/page.entity");
const position_entity_1 = require("../entity/position.entity");
const subCategory_entity_1 = require("../entity/subCategory.entity");
const page_service_1 = require("../page/page.service");
const position_service_1 = require("../position/position.service");
const typeorm_2 = require("typeorm");
let ArticleService = class ArticleService {
    constructor(articleRepository, pageService, positionService, categoryService, subCategoryService) {
        this.articleRepository = articleRepository;
        this.pageService = pageService;
        this.positionService = positionService;
        this.categoryService = categoryService;
        this.subCategoryService = subCategoryService;
    }
    async all() {
        return this.articleRepository.find({ relations: ["categorys", "subCategorys", "pages", "positions", "contents"] });
    }
    async get(id) {
        return this.articleRepository.findOne({ id });
    }
    async update(id, data) {
        return this.articleRepository.update(id, data);
    }
    async delete(id) {
        return this.articleRepository.delete({ id });
    }
    async creage(data) {
        let article = new article_entity_1.Article();
        article.title = data.title;
        article.subtitle = data.subtitle;
        article.description = data.description;
        if (data.price1 > 0)
            article.price1 = data.price1;
        if (data.price2 > 0)
            article.price2 = data.price2;
        if (data.price3 > 0)
            article.price3 = data.price3;
        if (data.discount1 > 0)
            article.discount1 = data.discount1;
        if (data.discount2 > 0)
            article.discount2 = data.discount2;
        if (data.discount3 > 0)
            article.discount3 = data.discount3;
        article.auther = data.auther;
        article.user = 1;
        let datetime = new Date().toLocaleString();
        article.date = datetime;
        article.link = data.link;
        let pages = await this.pageService.findByIds(data.pages);
        article.pages = pages;
        let positions = await this.positionService.findByIds(data.positions);
        article.positions = positions;
        let categorys = await this.categoryService.findByIds(data.categorys);
        article.categorys = categorys;
        let subCategorys = await this.subCategoryService.findByids(data.subCategorys);
        article.subCategorys = subCategorys;
        return await this.articleRepository.save(article);
        ;
    }
};
ArticleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        page_service_1.PageService,
        position_service_1.PositionService,
        category_service_1.CategoryService,
        sub_category_service_1.SubCategoryService])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map