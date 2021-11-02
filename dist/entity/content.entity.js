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
exports.Content = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
const ctype_entity_1 = require("./ctype.entity");
let Content = class Content {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Content.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], Content.prototype, "content", void 0);
__decorate([
    typeorm_1.ManyToOne(() => ctype_entity_1.Ctype, ctype => ctype.contents),
    __metadata("design:type", ctype_entity_1.Ctype)
], Content.prototype, "ctype", void 0);
__decorate([
    typeorm_1.ManyToOne(() => article_entity_1.Article, article => article.contents),
    __metadata("design:type", article_entity_1.Article)
], Content.prototype, "articles", void 0);
Content = __decorate([
    typeorm_1.Entity()
], Content);
exports.Content = Content;
//# sourceMappingURL=content.entity.js.map