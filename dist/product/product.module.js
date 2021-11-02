"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const Product_entity_1 = require("../entity/Product.entity");
const Img_entity_1 = require("../entity/Img.entity");
const typeorm_1 = require("@nestjs/typeorm");
const img_module_1 = require("../img/img.module");
const Feture_entity_1 = require("../entity/Feture.entity");
const fetures_module_1 = require("../fetures/fetures.module");
const com_entity_1 = require("../entity/com.entity");
const com_module_1 = require("../com/com.module");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Product_entity_1.Product, Img_entity_1.Img, Feture_entity_1.Feture, com_entity_1.Com]),
            img_module_1.ImgModule,
            fetures_module_1.FeturesModule,
            com_module_1.ComModule
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map