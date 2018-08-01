"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tarjeta_credito_service_1 = require("./tarjeta-credito.service");
const tarjeta_credito_controller_1 = require("./tarjeta-credito.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tarjeta_credito_entity_1 = require("./tarjeta-credito.entity");
let TarjetaCreditoModule = class TarjetaCreditoModule {
};
TarjetaCreditoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tarjeta_credito_entity_1.TarjetaCreditoEntity])],
        providers: [tarjeta_credito_service_1.TarjetaCreditoService],
        controllers: [tarjeta_credito_controller_1.TarjetaCreditoController]
    })
], TarjetaCreditoModule);
exports.TarjetaCreditoModule = TarjetaCreditoModule;
//# sourceMappingURL=tarjeta-credito.module.js.map