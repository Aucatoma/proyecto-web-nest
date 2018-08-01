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
const usuario_service_1 = require("./usuario.service");
const usuario_pipe_1 = require("./usuario.pipe");
const usuario_schema_1 = require("./usuario.schema");
const jwt_service_1 = require("../json-web-token/jwt.service");
let UsuarioController = class UsuarioController {
    constructor(_usuarioService, _jwtService) {
        this._usuarioService = _usuarioService;
        this._jwtService = _jwtService;
    }
    obtenerUsuario(id) {
        return this._usuarioService.findById(id);
    }
    actualizarUsuario(id, usuario) {
        const imagenBase64 = usuario.imagenUrl;
    }
    obtenerUsuarioToken(req) {
        const username = this._jwtService.leerToken(req.headers.authorization).data;
        return this._usuarioService.findByUsername(username);
    }
    obtenerUsuarioPorComentario(id) {
        return this._usuarioService.findByComentarioId(id);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "obtenerUsuario", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body(new usuario_pipe_1.UsuarioPipe(usuario_schema_1.USUARIO_SCHEMA))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "actualizarUsuario", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "obtenerUsuarioToken", null);
__decorate([
    common_1.Get('comentario/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "obtenerUsuarioPorComentario", null);
UsuarioController = __decorate([
    common_1.Controller('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_service_1.JwtService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map