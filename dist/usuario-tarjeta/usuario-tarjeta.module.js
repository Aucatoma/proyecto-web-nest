"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const usuario_tarjeta_controller_1 = require("./usuario-tarjeta.controller");
const usuario_tarjeta_service_1 = require("./usuario-tarjeta.service");
let UsuarioTarjetaModule = class UsuarioTarjetaModule {
};
UsuarioTarjetaModule = __decorate([
    common_1.Module({
        controllers: [usuario_tarjeta_controller_1.UsuarioTarjetaController],
        providers: [usuario_tarjeta_service_1.UsuarioTarjetaService]
    })
], UsuarioTarjetaModule);
exports.UsuarioTarjetaModule = UsuarioTarjetaModule;
//# sourceMappingURL=usuario-tarjeta.module.js.map