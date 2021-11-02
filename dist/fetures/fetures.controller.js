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
exports.FeturesController = void 0;
const common_1 = require("@nestjs/common");
const fetures_service_1 = require("./fetures.service");
let FeturesController = class FeturesController {
    constructor(fetureservice) {
        this.fetureservice = fetureservice;
    }
    async getOne(id) {
        return await this.fetureservice.getone(id);
    }
    async getfeturesbyproductid(productId) {
        return await this.fetureservice.getbyproid(productId);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeturesController.prototype, "getOne", null);
__decorate([
    common_1.Get('product/:productId'),
    __param(0, common_1.Param('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FeturesController.prototype, "getfeturesbyproductid", null);
FeturesController = __decorate([
    common_1.Controller('fetures'),
    __metadata("design:paramtypes", [fetures_service_1.FeturesService])
], FeturesController);
exports.FeturesController = FeturesController;
//# sourceMappingURL=fetures.controller.js.map