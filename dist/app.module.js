"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const page_module_1 = require("./page/page.module");
const position_module_1 = require("./position/position.module");
const category_module_1 = require("./category/category.module");
const ctype_module_1 = require("./ctype/ctype.module");
const content_module_1 = require("./content/content.module");
const review_module_1 = require("./review/review.module");
const click_module_1 = require("./click/click.module");
const comment_module_1 = require("./comment/comment.module");
const article_module_1 = require("./article/article.module");
const product_module_1 = require("./product/product.module");
const img_module_1 = require("./img/img.module");
const fetures_module_1 = require("./fetures/fetures.module");
const com_module_1 = require("./com/com.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'my_nestjs_project',
                autoLoadEntities: true,
                synchronize: true,
            }),
            page_module_1.PageModule,
            position_module_1.PositionModule,
            category_module_1.CategoryModule,
            ctype_module_1.CtypeModule,
            content_module_1.ContentModule,
            review_module_1.ReviewModule,
            click_module_1.ClickModule,
            comment_module_1.CommentModule,
            article_module_1.ArticleModule,
            product_module_1.ProductModule,
            img_module_1.ImgModule,
            fetures_module_1.FeturesModule,
            com_module_1.ComModule
        ],
        controllers: [app_controller_1.AppController,],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map