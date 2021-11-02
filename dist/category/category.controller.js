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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const sub_category_service_1 = require("./sub-category.service");
const mysql = require('mysql2');
let CategoryController = class CategoryController {
    constructor(categoryService, subCategoryService) {
        this.categoryService = categoryService;
        this.subCategoryService = subCategoryService;
    }
    async all() {
        return await this.categoryService.all();
    }
    async create(category) {
        return await this.categoryService.creage({ category: category });
    }
    async createSub(cid, subCategory) {
        let cat = await this.categoryService.get(cid);
        return await this.subCategoryService.create(subCategory, cat);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "all", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    common_1.Post('/sub'),
    __param(0, common_1.Body('cid')),
    __param(1, common_1.Body('subCategory')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createSub", null);
CategoryController = __decorate([
    common_1.Controller('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        sub_category_service_1.SubCategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map