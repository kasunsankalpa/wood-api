"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickModule = void 0;
const common_1 = require("@nestjs/common");
const click_service_1 = require("./click.service");
const click_controller_1 = require("./click.controller");
const typeorm_1 = require("@nestjs/typeorm");
const click_entity_1 = require("../entity/click.entity");
let ClickModule = class ClickModule {
};
ClickModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([click_entity_1.Click])],
        providers: [click_service_1.ClickService],
        controllers: [click_controller_1.ClickController]
    })
], ClickModule);
exports.ClickModule = ClickModule;
//# sourceMappingURL=click.module.js.map