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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const usuario_tarjeta_controller_1 = require("./usuario-tarjeta.controller");
const usuario_tarjeta_service_1 = require("./usuario-tarjeta.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_tarjeta_entity_1 = require("./usuario-tarjeta.entity");
let UsuarioTarjetaModule = class UsuarioTarjetaModule {
    constructor() { }
};
UsuarioTarjetaModule = __decorate([
    common_1.Module({
        exports: [usuario_tarjeta_service_1.UsuarioTarjetaService],
        imports: [typeorm_1.TypeOrmModule.forFeature([usuario_tarjeta_entity_1.UsuarioTarjetaEntity])],
        controllers: [usuario_tarjeta_controller_1.UsuarioTarjetaController],
        providers: [usuario_tarjeta_service_1.UsuarioTarjetaService],
    }),
    __metadata("design:paramtypes", [])
], UsuarioTarjetaModule);
exports.UsuarioTarjetaModule = UsuarioTarjetaModule;
//# sourceMappingURL=usuario-tarjeta.module.js.map