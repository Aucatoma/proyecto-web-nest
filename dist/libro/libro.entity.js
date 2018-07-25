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
const comentario_entity_1 = require("../comentario/comentario.entity");
const detalle_pedido_entity_1 = require("../detalle-pedido/detalle-pedido.entity");
const autor_entity_1 = require("../autor/autor.entity");
const editorial_entity_1 = require("../editorial/editorial.entity");
const genero_entity_1 = require("../genero/genero.entity");
let LibroEntity = class LibroEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LibroEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LibroEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LibroEntity.prototype, "anio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LibroEntity.prototype, "numeroPaginas", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LibroEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LibroEntity.prototype, "precio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LibroEntity.prototype, "imagenUrl", void 0);
__decorate([
    typeorm_1.OneToMany(type => comentario_entity_1.ComentarioEntity, comentarioEntity => comentarioEntity.libro),
    __metadata("design:type", Array)
], LibroEntity.prototype, "comentarios", void 0);
__decorate([
    typeorm_1.OneToMany(type => detalle_pedido_entity_1.DetallePedidoEntity, detallePedidoEntity => detallePedidoEntity.libro),
    __metadata("design:type", Array)
], LibroEntity.prototype, "detalles", void 0);
__decorate([
    typeorm_1.ManyToOne(type => autor_entity_1.AutorEntity, autorEntity => autorEntity.libros),
    __metadata("design:type", autor_entity_1.AutorEntity)
], LibroEntity.prototype, "autor", void 0);
__decorate([
    typeorm_1.ManyToOne(type => genero_entity_1.GeneroEntity, generoEntity => generoEntity.libros),
    __metadata("design:type", genero_entity_1.GeneroEntity)
], LibroEntity.prototype, "genero", void 0);
__decorate([
    typeorm_1.ManyToOne(type => editorial_entity_1.EditorialEntity, editorialEntity => editorialEntity.libros),
    __metadata("design:type", editorial_entity_1.EditorialEntity)
], LibroEntity.prototype, "editorial", void 0);
LibroEntity = __decorate([
    typeorm_1.Entity('LIBRO')
], LibroEntity);
exports.LibroEntity = LibroEntity;
//# sourceMappingURL=libro.entity.js.map