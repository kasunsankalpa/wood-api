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
exports.Img = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
let Img = class Img {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Img.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Img.prototype, "imgpath", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Img.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Product_entity_1.Product, product => product.images),
    __metadata("design:type", Product_entity_1.Product)
], Img.prototype, "product", void 0);
Img = __decorate([
    typeorm_1.Entity()
], Img);
exports.Img = Img;
//# sourceMappingURL=Img.entity.js.map