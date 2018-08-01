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
const tarjeta_credito_service_1 = require("./tarjeta-credito.service");
const tarjeta_credito_pipe_1 = require("./tarjeta-credito.pipe");
const tarjeta_credito_schema_1 = require("./tarjeta-credito.schema");
let TarjetaCreditoController = class TarjetaCreditoController {
    constructor(_tarjetaService) {
        this._tarjetaService = _tarjetaService;
    }
    obtenerTodos() {
        return this._tarjetaService.findAll();
    }
    obtenerUno(id) {
        return this._tarjetaService.findByLibroId(id);
    }
    insertarTarjeta(tarjeta) {
        return this._tarjetaService.insert(tarjeta);
    }
    actualizarTarjeta(id, tarjeta) {
        return this._tarjetaService.update(id, tarjeta);
    }
    eliminarTarjeta(id) {
        return this._tarjetaService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "obtenerTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "obtenerUno", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new tarjeta_credito_pipe_1.TarjetaCreditoPipe(tarjeta_credito_schema_1.TARJETA_SCHEMA)),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "insertarTarjeta", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body(new tarjeta_credito_pipe_1.TarjetaCreditoPipe(tarjeta_credito_schema_1.TARJETA_SCHEMA))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "actualizarTarjeta", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "eliminarTarjeta", null);
TarjetaCreditoController = __decorate([
    common_1.Controller('tarjeta-credito'),
    __metadata("design:paramtypes", [tarjeta_credito_service_1.TarjetaCreditoService])
], TarjetaCreditoController);
exports.TarjetaCreditoController = TarjetaCreditoController;
//# sourceMappingURL=tarjeta-credito.controller.js.map