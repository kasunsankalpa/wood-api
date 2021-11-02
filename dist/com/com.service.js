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
exports.ComService = void 0;
const common_1 = require("@nestjs/common");
const com_entity_1 = require("../entity/com.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ComService = class ComService {
    constructor(comRepository) {
        this.comRepository = comRepository;
    }
    async createProduct(com) {
        return await this.comRepository.save(com);
    }
    async getbyproid(productId) {
        return await this.comRepository.find({ where: { product: productId } });
    }
};
ComService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(com_entity_1.Com)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ComService);
exports.ComService = ComService;
//# sourceMappingURL=com.service.js.map