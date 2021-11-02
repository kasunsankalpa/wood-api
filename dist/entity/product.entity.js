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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const Img_entity_1 = require("./Img.entity");
const Feture_entity_1 = require("./Feture.entity");
const com_entity_1 = require("./com.entity");
let Product = class Product {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ default: "gfg" }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Product.prototype, "itemcode", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Product.prototype, "imgurl", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Product.prototype, "fulldetsils", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Product.prototype, "detais2", void 0);
__decorate([
    typeorm_1.OneToMany(() => Img_entity_1.Img, image => image.product),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    typeorm_1.OneToMany(() => Feture_entity_1.Feture, feture => feture.product),
    __metadata("design:type", Array)
], Product.prototype, "fetures", void 0);
__decorate([
    typeorm_1.OneToMany(() => com_entity_1.Com, com => com.product),
    __metadata("design:type", Array)
], Product.prototype, "com", void 0);
Product = __decorate([
    typeorm_1.Entity()
], Product);
exports.Product = Product;
//# sourceMappingURL=Product.entity.js.map