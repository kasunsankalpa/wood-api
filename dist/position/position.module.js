"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionModule = void 0;
const common_1 = require("@nestjs/common");
const position_service_1 = require("./position.service");
const position_controller_1 = require("./position.controller");
const typeorm_1 = require("@nestjs/typeorm");
const position_entity_1 = require("../entity/position.entity");
const page_entity_1 = require("../entity/page.entity");
const page_service_1 = require("../page/page.service");
const article_entity_1 = require("../entity/article.entity");
let PositionModule = class PositionModule {
};
PositionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([position_entity_1.Position, page_entity_1.Page, article_entity_1.Article])],
        providers: [position_service_1.PositionService, page_service_1.PageService],
        controllers: [position_controller_1.PositionController]
    })
], PositionModule);
exports.PositionModule = PositionModule;
//# sourceMappingURL=position.module.js.map