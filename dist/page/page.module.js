"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageModule = void 0;
const common_1 = require("@nestjs/common");
const page_service_1 = require("./page.service");
const page_controller_1 = require("./page.controller");
const typeorm_1 = require("@nestjs/typeorm");
const page_entity_1 = require("../entity/page.entity");
const position_entity_1 = require("../entity/position.entity");
const position_service_1 = require("../position/position.service");
const article_entity_1 = require("../entity/article.entity");
let PageModule = class PageModule {
};
PageModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([page_entity_1.Page, position_entity_1.Position, article_entity_1.Article])
        ],
        providers: [page_service_1.PageService, position_service_1.PositionService],
        controllers: [page_controller_1.PageController]
    })
], PageModule);
exports.PageModule = PageModule;
//# sourceMappingURL=page.module.js.map