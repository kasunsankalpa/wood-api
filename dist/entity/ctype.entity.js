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
exports.Ctype = void 0;
const typeorm_1 = require("typeorm");
const content_entity_1 = require("./content.entity");
let Ctype = class Ctype {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Ctype.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Ctype.prototype, "ctype", void 0);
__decorate([
    typeorm_1.Column({ default: 1 }),
    __metadata("design:type", Number)
], Ctype.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToMany(() => content_entity_1.Content, content => content.ctype),
    __metadata("design:type", Array)
], Ctype.prototype, "contents", void 0);
Ctype = __decorate([
    typeorm_1.Entity()
], Ctype);
exports.Ctype = Ctype;
//# sourceMappingURL=ctype.entity.js.map