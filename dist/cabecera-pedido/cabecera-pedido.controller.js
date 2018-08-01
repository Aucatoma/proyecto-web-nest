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
const cabecera_pedido_service_1 = require("./cabecera-pedido.service");
const cabecera_pedido_schema_1 = require("./cabecera-pedido.schema");
const cabecera_pedido_pipe_1 = require("./cabecera-pedido.pipe");
let CabeceraPedidoController = class CabeceraPedidoController {
    constructor(_cabeceraService) {
        this._cabeceraService = _cabeceraService;
    }
    obtenerTodos() {
        return this._cabeceraService.findAll();
    }
    obtenerUno(id) {
        return this._cabeceraService.findById(id);
    }
    insertarCabecera(cabecera) {
        return this._cabeceraService.insert(cabecera);
    }
    actualizarCabecera(id, cabecera) {
        return this._cabeceraService.update(id, cabecera);
    }
    eliminarCabecera(id) {
        return this._cabeceraService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CabeceraPedidoController.prototype, "obtenerTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CabeceraPedidoController.prototype, "obtenerUno", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new cabecera_pedido_pipe_1.CabeceraPedidoPipe(cabecera_pedido_schema_1.CABECERA_SCHEMA)),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CabeceraPedidoController.prototype, "insertarCabecera", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body(new cabecera_pedido_pipe_1.CabeceraPedidoPipe(cabecera_pedido_schema_1.CABECERA_SCHEMA))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CabeceraPedidoController.prototype, "actualizarCabecera", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CabeceraPedidoController.prototype, "eliminarCabecera", null);
CabeceraPedidoController = __decorate([
    common_1.Controller('cabecera-pedido'),
    __metadata("design:paramtypes", [cabecera_pedido_service_1.CabeceraPedidoService])
], CabeceraPedidoController);
exports.CabeceraPedidoController = CabeceraPedidoController;
//# sourceMappingURL=cabecera-pedido.controller.js.map