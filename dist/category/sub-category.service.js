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
exports.SubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subCategory_entity_1 = require("../entity/subCategory.entity");
const typeorm_2 = require("typeorm");
let SubCategoryService = class SubCategoryService {
    constructor(subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }
    async all() {
        return this.subCategoryRepository.find({ relations: ["category"] });
    }
    async create(data, category) {
        const sub = new subCategory_entity_1.SubCategory();
        sub.subCategory = data;
        sub.category = category;
        return this.subCategoryRepository.save(sub);
    }
    async get(id) {
        return this.subCategoryRepository.findOne({ id });
    }
    async findByids(ids) {
        return this.subCategoryRepository.findByIds(ids);
    }
    async update(id, data) {
        return this.subCategoryRepository.update(id, data);
    }
    async delete(id) {
        return this.subCategoryRepository.delete({ id });
    }
};
SubCategoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(subCategory_entity_1.SubCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubCategoryService);
exports.SubCategoryService = SubCategoryService;
//# sourceMappingURL=sub-category.service.js.map