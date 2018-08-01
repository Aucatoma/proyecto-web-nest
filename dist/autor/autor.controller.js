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
const autor_service_1 = require("./autor.service");
let AutorController = class AutorController {
    constructor(_autorService) {
        this._autorService = _autorService;
    }
    obtenerTodos() {
    }
    obtenerUnoPorId(id) {
        return this._autorService.findById(id);
    }
    obtenerUnoPorNombre(nombre) {
        return this._autorService.findByNombre(nombre);
    }
    obtenerAutor(id) {
        return this._autorService.findByLibroId(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "obtenerTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "obtenerUnoPorId", null);
__decorate([
    common_1.Get('nombre/:nombre'),
    __param(0, common_1.Param('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "obtenerUnoPorNombre", null);
__decorate([
    common_1.Get('libro/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "obtenerAutor", null);
AutorController = __decorate([
    common_1.Controller('autor'),
    __metadata("design:paramtypes", [autor_service_1.AutorService])
], AutorController);
exports.AutorController = AutorController;
//# sourceMappingURL=autor.controller.js.map