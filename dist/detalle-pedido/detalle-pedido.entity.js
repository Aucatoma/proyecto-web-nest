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
const cabecera_pedido_entity_1 = require("../cabecera-pedido/cabecera-pedido.entity");
const libro_entity_1 = require("../libro/libro.entity");
let DetallePedidoEntity = class DetallePedidoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DetallePedidoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DetallePedidoEntity.prototype, "cantidad", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cabecera_pedido_entity_1.CabeceraPedidoEntity, cabeceraPedidoEntity => cabeceraPedidoEntity.detalles),
    __metadata("design:type", cabecera_pedido_entity_1.CabeceraPedidoEntity)
], DetallePedidoEntity.prototype, "cabecera", void 0);
__decorate([
    typeorm_1.ManyToOne(type => libro_entity_1.LibroEntity, libroEntity => libroEntity.detalles),
    __metadata("design:type", libro_entity_1.LibroEntity)
], DetallePedidoEntity.prototype, "libro", void 0);
DetallePedidoEntity = __decorate([
    typeorm_1.Entity('DETALLE_PEDIDO')
], DetallePedidoEntity);
exports.DetallePedidoEntity = DetallePedidoEntity;
//# sourceMappingURL=detalle-pedido.entity.js.map