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
exports.PositionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const position_entity_1 = require("../entity/position.entity");
let PositionService = class PositionService {
    constructor(positionRepository) {
        this.positionRepository = positionRepository;
    }
    async all() {
        return this.positionRepository.find({ relations: ["page"] });
    }
    async create(data, page) {
        const position = new position_entity_1.Position();
        position.position = data;
        position.page = page;
        return this.positionRepository.save(position);
    }
    async get(id) {
        return this.positionRepository.findOne({ id });
    }
    async findByIds(ids) {
        return await this.positionRepository.findByIds(ids);
    }
    async update(id, data) {
        return this.positionRepository.update(id, data);
    }
    async delete(id) {
        return this.positionRepository.delete({ id });
    }
};
PositionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(position_entity_1.Position)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PositionService);
exports.PositionService = PositionService;
//# sourceMappingURL=position.service.js.map