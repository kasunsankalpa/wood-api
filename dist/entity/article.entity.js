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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const click_entity_1 = require("./click.entity");
const content_entity_1 = require("./content.entity");
const page_entity_1 = require("./page.entity");
const position_entity_1 = require("./position.entity");
const review_entity_1 = require("./review.entity");
const subCategory_entity_1 = require("./subCategory.entity");
const comment_entity_1 = require("./comment.entity");
let Article = class Article {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Article.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Article.prototype, "subtitle", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, type: "text" }),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 5, scale: 2, default: 0, }),
    __metadata("design:type", Number)
], Article.prototype, "price1", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 5, scale: 2, default: 0, }),
    __metadata("design:type", Number)
], Article.prototype, "price2", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 5, scale: 2, default: 0, }),
    __metadata("design:type", Number)
], Article.prototype, "price3", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 5, scale: 2, default: 0, }),
    __metadata("design:type", Number)
], Article.prototype, "discount1", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 5, scale: 2, default: 0, }),
    __metadata("design:type", Number)
], Article.prototype, "discount2", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 5, scale: 2, default: 0, }),
    __metadata("design:type", Number)
], Article.prototype, "discount3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Article.prototype, "auther", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Article.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime' }),
    __metadata("design:type", String)
], Article.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Article.prototype, "link", void 0);
__decorate([
    typeorm_1.ManyToMany(() => page_entity_1.Page),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Article.prototype, "pages", void 0);
__decorate([
    typeorm_1.ManyToMany(() => position_entity_1.Position),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Article.prototype, "positions", void 0);
__decorate([
    typeorm_1.ManyToMany(() => category_entity_1.Category),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Article.prototype, "categorys", void 0);
__decorate([
    typeorm_1.ManyToMany(() => subCategory_entity_1.SubCategory),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Article.prototype, "subCategorys", void 0);
__decorate([
    typeorm_1.OneToMany(() => content_entity_1.Content, content => content.articles),
    __metadata("design:type", Array)
], Article.prototype, "contents", void 0);
__decorate([
    typeorm_1.OneToMany(() => review_entity_1.Review, review => review.article),
    __metadata("design:type", Array)
], Article.prototype, "reviews", void 0);
__decorate([
    typeorm_1.OneToMany(() => click_entity_1.Click, click => click.article),
    __metadata("design:type", Array)
], Article.prototype, "clicks", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_entity_1.Comment, comment => comment.article),
    __metadata("design:type", Array)
], Article.prototype, "comments", void 0);
Article = __decorate([
    typeorm_1.Entity()
], Article);
exports.Article = Article;
//# sourceMappingURL=article.entity.js.map