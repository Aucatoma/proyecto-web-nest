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
const editorial_service_1 = require("./editorial.service");
let EditorialController = class EditorialController {
    constructor(_editorialService) {
        this._editorialService = _editorialService;
    }
    obtenerTodos() {
        return this._editorialService.findAll();
    }
    obtenerUnoPorId(id) {
        return this._editorialService.findByEditorialId(id);
    }
    obtenerUnoPorNombre(nombre) {
        return this._editorialService.findByEditorialName(nombre);
    }
    obtenerPorLibro(id) {
        return this._editorialService.findByLibroId(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "obtenerTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "obtenerUnoPorId", null);
__decorate([
    common_1.Get('nombre/:nombre'),
    __param(0, common_1.Param('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "obtenerUnoPorNombre", null);
__decorate([
    common_1.Get('libro/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditorialController.prototype, "obtenerPorLibro", null);
EditorialController = __decorate([
    common_1.Controller('editorial'),
    __metadata("design:paramtypes", [editorial_service_1.EditorialService])
], EditorialController);
exports.EditorialController = EditorialController;
//# sourceMappingURL=editorial.controller.js.map