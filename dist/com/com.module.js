"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComModule = void 0;
const common_1 = require("@nestjs/common");
const com_controller_1 = require("./com.controller");
const com_service_1 = require("./com.service");
const com_entity_1 = require("../entity/com.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ComModule = class ComModule {
};
ComModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([com_entity_1.Com])
        ],
        controllers: [com_controller_1.ComController],
        providers: [com_service_1.ComService]
    })
], ComModule);
exports.ComModule = ComModule;
//# sourceMappingURL=com.module.js.map