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
const typeorm_1 = require("typeorm");
const usuario_tarjeta_entity_1 = require("../usuario-tarjeta/usuario-tarjeta.entity");
const detalle_pedido_entity_1 = require("../detalle-pedido/detalle-pedido.entity");
let CabeceraPedidoEntity = class CabeceraPedidoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CabeceraPedidoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CabeceraPedidoEntity.prototype, "numero", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CabeceraPedidoEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CabeceraPedidoEntity.prototype, "iva", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_tarjeta_entity_1.UsuarioTarjetaEntity, usuarioTarjetaEntity => usuarioTarjetaEntity.cabeceras),
    __metadata("design:type", usuario_tarjeta_entity_1.UsuarioTarjetaEntity)
], CabeceraPedidoEntity.prototype, "usuarioTarjeta", void 0);
__decorate([
    typeorm_1.OneToMany(type => detalle_pedido_entity_1.DetallePedidoEntity, detallePedidoEntity => detallePedidoEntity.cabecera),
    __metadata("design:type", Array)
], CabeceraPedidoEntity.prototype, "detalles", void 0);
CabeceraPedidoEntity = __decorate([
    typeorm_1.Entity('CABECERA_PEDIDO')
], CabeceraPedidoEntity);
exports.CabeceraPedidoEntity = CabeceraPedidoEntity;
//# sourceMappingURL=cabecera-pedido.entity.js.map