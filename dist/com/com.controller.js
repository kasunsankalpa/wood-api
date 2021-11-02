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
exports.ComController = void 0;
const common_1 = require("@nestjs/common");
const com_service_1 = require("./com.service");
let ComController = class ComController {
    constructor(comservise) {
        this.comservise = comservise;
    }
    async create(com) {
        return await this.comservise.createProduct(com);
    }
    async getfeturesbyproductid(productId) {
        return await this.comservise.getbyproid(productId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('com')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComController.prototype, "create", null);
__decorate([
    common_1.Get('product/:productId'),
    __param(0, common_1.Param('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComController.prototype, "getfeturesbyproductid", null);
ComController = __decorate([
    common_1.Controller('com'),
    __metadata("design:paramtypes", [com_service_1.ComService])
], ComController);
exports.ComController = ComController;
//# sourceMappingURL=com.controller.js.map