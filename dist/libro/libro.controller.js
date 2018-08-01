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
const libro_service_1 = require("./libro.service");
let LibroController = class LibroController {
    constructor(_libroService) {
        this._libroService = _libroService;
    }
    obtenerTodos(param) {
        if (Object.keys(param).length !== 0) {
            return this._libroService.findLike(param.nombre);
        }
        else {
            return this._libroService.findAll();
        }
    }
    obtenerUnoPorId(id) {
        return this._libroService.findByLibroId(id);
    }
    obtenerUnoPorNombre(nombre) {
        return this._libroService.findByLibroName(nombre);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "obtenerTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "obtenerUnoPorId", null);
__decorate([
    common_1.Get('/nombre/:nombre'),
    __param(0, common_1.Param('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibroController.prototype, "obtenerUnoPorNombre", null);
LibroController = __decorate([
    common_1.Controller('libro'),
    __metadata("design:paramtypes", [libro_service_1.LibroService])
], LibroController);
exports.LibroController = LibroController;
//# sourceMappingURL=libro.controller.js.map