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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const detalle_pedido_service_1 = require("./detalle-pedido.service");
const detalle_pedido_pipe_1 = require("./detalle-pedido.pipe");
const detalle_pedido_schema_1 = require("./detalle-pedido.schema");
let DetallePedidoController = class DetallePedidoController {
    constructor(_detalleService) {
        this._detalleService = _detalleService;
    }
    obtenerTodos() {
        return this._detalleService.findAll();
    }
    obtenerUno(id) {
        return this._detalleService.findByCabeceraId(id);
    }
    insertarDetalle(detalle) {
        return this._detalleService.insert(detalle);
    }
    actualizarDetalle(id, detalle) {
        return this._detalleService.update(id, detalle);
    }
    eliminarDetalle(id) {
        return this._detalleService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetallePedidoController.prototype, "obtenerTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DetallePedidoController.prototype, "obtenerUno", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new detalle_pedido_pipe_1.DetallePedidoPipe(detalle_pedido_schema_1.DETALLE_SCHEMA)),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DetallePedidoController.prototype, "insertarDetalle", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body(new detalle_pedido_pipe_1.DetallePedidoPipe(detalle_pedido_schema_1.DETALLE_SCHEMA))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DetallePedidoController.prototype, "actualizarDetalle", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DetallePedidoController.prototype, "eliminarDetalle", null);
DetallePedidoController = __decorate([
    common_1.Controller('detalle-pedido'),
    __metadata("design:paramtypes", [detalle_pedido_service_1.DetallePedidoService])
], DetallePedidoController);
exports.DetallePedidoController = DetallePedidoController;
//# sourceMappingURL=detalle-pedido.controller.js.map