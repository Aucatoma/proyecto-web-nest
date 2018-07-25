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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuario/usuario.entity");
const libro_entity_1 = require("../libro/libro.entity");
let ComentarioEntity = class ComentarioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ComentarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ComentarioEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ComentarioEntity.prototype, "comentario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ComentarioEntity.prototype, "puntuacionLibro", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.UsuarioEntity, usuarioEntity => usuarioEntity.comentarios),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], ComentarioEntity.prototype, "usuario", void 0);
__decorate([
    typeorm_1.ManyToOne(type => libro_entity_1.LibroEntity, libroEntity => libroEntity.comentarios),
    __metadata("design:type", libro_entity_1.LibroEntity)
], ComentarioEntity.prototype, "libro", void 0);
ComentarioEntity = __decorate([
    typeorm_1.Entity('COMENTARIO')
], ComentarioEntity);
exports.ComentarioEntity = ComentarioEntity;
//# sourceMappingURL=comentario.entity.js.map