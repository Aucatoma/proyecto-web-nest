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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const usuario_pipe_1 = require("./usuario.pipe");
const usuario_schema_1 = require("./usuario.schema");
const jwt_service_1 = require("../json-web-token/jwt.service");
const fs = require('fs');
let UsuarioController = class UsuarioController {
    constructor(_usuarioService, _jwtService) {
        this._usuarioService = _usuarioService;
        this._jwtService = _jwtService;
    }
    obtenerUsuario(id) {
        return this._usuarioService.findById(id);
    }
    actualizarUsuario(id, usuario, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Recibiendo', JSON.stringify(usuario));
            if (usuario.imagen !== 'na') {
                const imagenBase64 = usuario.imagen;
                const extension = usuario.extension;
                const nombreArchivo = `${usuario.username}.${extension}`;
                const buffer = Buffer.from(imagenBase64, 'base64');
                fs.writeFile(`src/assets/usuario/${nombreArchivo}`, buffer, (error) => __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        usuario.imagen = undefined;
                        usuario.extension = undefined;
                        usuario.imagenUrl = `http://localhost:8080/usuario/${nombreArchivo}`;
                        const usuarioInsert = yield this._usuarioService.editarUsuario(usuario);
                        console.log('Enviando', JSON.stringify(usuarioInsert));
                        res.send(usuarioInsert);
                    }
                }));
            }
            else {
                usuario.imagenUrl = `http://localhost:8080/usuario/${usuario.username}.${usuario.extension}`;
                usuario.imagen = undefined;
                usuario.extension = undefined;
                console.log('Enviando', JSON.stringify(usuario));
                const usuarioInsert = yield this._usuarioService.editarUsuario(usuario);
                res.send(usuarioInsert);
            }
        });
    }
    obtenerUsuarioToken(req) {
        const id = this._jwtService.leerToken(req.headers.authorization).data;
        return this._usuarioService.findById(id);
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
    __param(0, common_1.Param('id')), __param(1, common_1.Body(new usuario_pipe_1.UsuarioPipe(usuario_schema_1.USUARIO_SCHEMA))), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
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