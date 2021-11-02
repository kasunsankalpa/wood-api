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
exports.ImgController = void 0;
const common_1 = require("@nestjs/common");
const img_service_1 = require("./img.service");
let ImgController = class ImgController {
    constructor(imgService) {
        this.imgService = imgService;
    }
    async getOne(productId) {
        return await this.imgService.getone(productId);
    }
    async getfeturesbyproductid(productId) {
        return await this.imgService.getbyproid(productId);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImgController.prototype, "getOne", null);
__decorate([
    common_1.Get('product/:productId'),
    __param(0, common_1.Param('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImgController.prototype, "getfeturesbyproductid", null);
ImgController = __decorate([
    common_1.Controller('img'),
    __metadata("design:paramtypes", [img_service_1.ImgService])
], ImgController);
exports.ImgController = ImgController;
//# sourceMappingURL=img.controller.js.map