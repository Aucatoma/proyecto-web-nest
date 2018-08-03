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
    obtenerTarjetas(req) {
        const id = req.user.data;
        return this._tarjetaService.findByUserId(id);
    }
    insertarTarjeta(tarjeta, req) {
        console.log(tarjeta);
        const id = req.user.data;
        return this._tarjetaService.insert(id, tarjeta);
    }
    actualizarTarjeta(tarjeta, req) {
        const id = req.user.data;
        return this._tarjetaService.update(tarjeta);
    }
    eliminarTarjeta(id, req) {
        const id_usuario = req.user.data;
        return this._tarjetaService.delete(id_usuario, id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "obtenerTarjetas", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(new tarjeta_credito_pipe_1.TarjetaCreditoPipe(tarjeta_credito_schema_1.TARJETA_SCHEMA))), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "insertarTarjeta", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body(new tarjeta_credito_pipe_1.TarjetaCreditoPipe(tarjeta_credito_schema_1.TARJETA_SCHEMA))), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "actualizarTarjeta", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TarjetaCreditoController.prototype, "eliminarTarjeta", null);
TarjetaCreditoController = __decorate([
    common_1.Controller('tarjeta-credito'),
    __metadata("design:paramtypes", [tarjeta_credito_service_1.TarjetaCreditoService])
], TarjetaCreditoController);
exports.TarjetaCreditoController = TarjetaCreditoController;
//# sourceMappingURL=tarjeta-credito.controller.js.map