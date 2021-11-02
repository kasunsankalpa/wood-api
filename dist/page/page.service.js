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
exports.PageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const page_entity_1 = require("../entity/page.entity");
let PageService = class PageService {
    constructor(pageRepository) {
        this.pageRepository = pageRepository;
    }
    async all() {
        return this.pageRepository.find();
    }
    async create(data) {
        return this.pageRepository.save(data);
    }
    async get(id) {
        return await this.pageRepository.findOne({ id });
    }
    async findByIds(ids) {
        return await this.pageRepository.findByIds(ids);
    }
    async update(id, data) {
        return this.pageRepository.update(id, data);
    }
    async delete(id) {
        return this.pageRepository.delete({ id });
    }
};
PageService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(page_entity_1.Page)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PageService);
exports.PageService = PageService;
//# sourceMappingURL=page.service.js.map