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
const usuario_entity_1 = require("../usuario/usuario.entity");
const tarjeta_credito_entity_1 = require("../tarjeta-credito/tarjeta-credito.entity");
const cabecera_pedido_entity_1 = require("../cabecera-pedido/cabecera-pedido.entity");
let UsuarioTarjetaEntity = class UsuarioTarjetaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UsuarioTarjetaEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.UsuarioEntity, usuarioEntity => usuarioEntity.usuariosTarjetas),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], UsuarioTarjetaEntity.prototype, "usuario", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tarjeta_credito_entity_1.TarjetaCreditoEntity, tarjetaCreditoEntity => tarjetaCreditoEntity.usuariosTarjetas),
    __metadata("design:type", tarjeta_credito_entity_1.TarjetaCreditoEntity)
], UsuarioTarjetaEntity.prototype, "tarjetaCredito", void 0);
__decorate([
    typeorm_1.OneToMany(type => cabecera_pedido_entity_1.CabeceraPedidoEntity, cabeceraPedidoEntity => cabeceraPedidoEntity.usuarioTarjeta),
    __metadata("design:type", Array)
], UsuarioTarjetaEntity.prototype, "cabeceras", void 0);
UsuarioTarjetaEntity = __decorate([
    typeorm_1.Entity('USUARIO_TARJETA')
], UsuarioTarjetaEntity);
exports.UsuarioTarjetaEntity = UsuarioTarjetaEntity;
//# sourceMappingURL=usuario-tarjeta.entity.js.map