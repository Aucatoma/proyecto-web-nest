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
const genero_service_1 = require("./genero.service");
let GeneroController = class GeneroController {
    constructor(_generoService) {
        this._generoService = _generoService;
    }
    obtenerTodos() {
        return this._generoService.findAll();
    }
    obtenerUnoPorId(id) {
        return this._generoService.findByGeneroId(id);
    }
    obtenerUnoPorNombre(nombre) {
        return this._generoService.findByGeneroName(nombre);
    }
    obtenerPorLibro(id) {
        return this._generoService.findByLibroId(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "obtenerTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "obtenerUnoPorId", null);
__decorate([
    common_1.Get('nombre/:nombre'),
    __param(0, common_1.Param('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "obtenerUnoPorNombre", null);
__decorate([
    common_1.Get('libro/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GeneroController.prototype, "obtenerPorLibro", null);
GeneroController = __decorate([
    common_1.Controller('genero'),
    __metadata("design:paramtypes", [genero_service_1.GeneroService])
], GeneroController);
exports.GeneroController = GeneroController;
//# sourceMappingURL=genero.controller.js.map