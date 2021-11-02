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
exports.PageController = void 0;
const common_1 = require("@nestjs/common");
const page_service_1 = require("./page.service");
const PageCreateDto_dto_1 = require("./PageCreateDto.dto");
let PageController = class PageController {
    constructor(pageService) {
        this.pageService = pageService;
    }
    async all() {
        return this.pageService.all();
    }
    async create(page) {
        return this.pageService.create({ page: page.page });
    }
    async get(id) {
        return this.pageService.get(id);
    }
    async update(id, page) {
        return this.pageService.update(id, { page });
    }
    async delete(id) {
        console.log("delet controller caled" + id);
        return this.pageService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PageController.prototype, "all", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PageCreateDto_dto_1.PageCreateDto]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "get", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "delete", null);
PageController = __decorate([
    common_1.Controller('page'),
    __metadata("design:paramtypes", [page_service_1.PageService])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map