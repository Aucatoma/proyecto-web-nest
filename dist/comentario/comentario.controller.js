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
const comentario_service_1 = require("./comentario.service");
const comentario_pipe_1 = require("./comentario.pipe");
const comentario_schema_1 = require("./comentario.schema");
let ComentarioController = class ComentarioController {
    constructor(_comentarioService) {
        this._comentarioService = _comentarioService;
    }
    obtenerTodos() {
        return this._comentarioService.findAll();
    }
    obtenerUno(id) {
        return this._comentarioService.findByLibroId(id);
    }
    insertarComentario(comentario) {
        return this._comentarioService.insert(comentario);
    }
    actualizarComentario(id, comentario) {
        return this._comentarioService.update(id, comentario);
    }
    eliminarComentario(id) {
        return this._comentarioService.delete(id);
    }
    obtenerComentarios(id) {
        return this._comentarioService.findByLibroIdArr(id);
    }
    obtenerUsuarioComentario(id) {
        return this._comentarioService.findUsuarioByLibroComentario(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "obtenerTodos", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "obtenerUno", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new comentario_pipe_1.ComentarioPipe(comentario_schema_1.COMENTARIO_SCHEMA)),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "insertarComentario", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body(new comentario_pipe_1.ComentarioPipe(comentario_schema_1.COMENTARIO_SCHEMA))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "actualizarComentario", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "eliminarComentario", null);
__decorate([
    common_1.Get('libro/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "obtenerComentarios", null);
__decorate([
    common_1.Get('libro/usuario/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "obtenerUsuarioComentario", null);
ComentarioController = __decorate([
    common_1.Controller('comentario'),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioController);
exports.ComentarioController = ComentarioController;
//# sourceMappingURL=comentario.controller.js.map