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
exports.Click = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
let Click = class Click {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Click.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Click.prototype, "ip", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime" }),
    __metadata("design:type", Date)
], Click.prototype, "time", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Click.prototype, "details", void 0);
__decorate([
    typeorm_1.ManyToOne(() => article_entity_1.Article, article => article.clicks),
    __metadata("design:type", article_entity_1.Article)
], Click.prototype, "article", void 0);
Click = __decorate([
    typeorm_1.Entity()
], Click);
exports.Click = Click;
//# sourceMappingURL=click.entity.js.map