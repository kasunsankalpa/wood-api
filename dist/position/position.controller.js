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
exports.PositionController = void 0;
const common_1 = require("@nestjs/common");
const page_service_1 = require("../page/page.service");
const position_service_1 = require("./position.service");
let PositionController = class PositionController {
    constructor(positionService, pageService) {
        this.positionService = positionService;
        this.pageService = pageService;
    }
    async create(pid, position) {
        const page = await this.pageService.get(pid);
        console.log(page);
        return this.positionService.create(position, page);
    }
    async all() {
        return this.positionService.all();
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('pid')),
    __param(1, common_1.Body('position')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PositionController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PositionController.prototype, "all", null);
PositionController = __decorate([
    common_1.Controller('position'),
    __metadata("design:paramtypes", [position_service_1.PositionService,
        page_service_1.PageService])
], PositionController);
exports.PositionController = PositionController;
//# sourceMappingURL=position.controller.js.map