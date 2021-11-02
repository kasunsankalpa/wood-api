"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const article_controller_1 = require("./article.controller");
const typeorm_1 = require("@nestjs/typeorm");
const article_entity_1 = require("../entity/article.entity");
const page_service_1 = require("../page/page.service");
const position_service_1 = require("../position/position.service");
const category_service_1 = require("../category/category.service");
const sub_category_service_1 = require("../category/sub-category.service");
const page_entity_1 = require("../entity/page.entity");
const category_entity_1 = require("../entity/category.entity");
const subCategory_entity_1 = require("../entity/subCategory.entity");
const position_entity_1 = require("../entity/position.entity");
const content_entity_1 = require("../entity/content.entity");
const content_service_1 = require("../content/content.service");
const ctype_entity_1 = require("../entity/ctype.entity");
const ctype_service_1 = require("../ctype/ctype.service");
let ArticleModule = class ArticleModule {
};
ArticleModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([article_entity_1.Article, page_entity_1.Page, position_entity_1.Position, category_entity_1.Category, subCategory_entity_1.SubCategory, content_entity_1.Content, ctype_entity_1.Ctype])
        ],
        providers: [article_service_1.ArticleService, page_service_1.PageService, position_service_1.PositionService, category_service_1.CategoryService, sub_category_service_1.SubCategoryService, content_service_1.ContentService, ctype_service_1.CtypeService],
        controllers: [article_controller_1.ArticleController]
    })
], ArticleModule);
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map