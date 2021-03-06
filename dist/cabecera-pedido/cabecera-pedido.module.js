"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cabecera_pedido_controller_1 = require("./cabecera-pedido.controller");
const cabecera_pedido_service_1 = require("./cabecera-pedido.service");
const typeorm_1 = require("@nestjs/typeorm");
const cabecera_pedido_entity_1 = require("./cabecera-pedido.entity");
let CabeceraPedidoModule = class CabeceraPedidoModule {
};
CabeceraPedidoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([cabecera_pedido_entity_1.CabeceraPedidoEntity])],
        controllers: [cabecera_pedido_controller_1.CabeceraPedidoController],
        providers: [cabecera_pedido_service_1.CabeceraPedidoService]
    })
], CabeceraPedidoModule);
exports.CabeceraPedidoModule = CabeceraPedidoModule;
//# sourceMappingURL=cabecera-pedido.module.js.map