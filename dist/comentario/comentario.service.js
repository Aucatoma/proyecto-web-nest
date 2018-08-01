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
const typeorm_1 = require("@nestjs/typeorm");
const comentario_entity_1 = require("./comentario.entity");
const typeorm_2 = require("typeorm");
let ComentarioService = class ComentarioService {
    constructor(_comentarioRepository) {
        this._comentarioRepository = _comentarioRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comentarioRepository.find();
        });
    }
    findByLibroId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comentarioRepository.findOne(id);
        });
    }
    insert(comentario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comentarioRepository.insert(comentario);
        });
    }
    update(id, comentario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comentarioRepository.update(id, comentario);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comentarioRepository.delete(id);
        });
    }
    findByLibroIdArr(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._comentarioRepository.createQueryBuilder('comentario')
                .innerJoin('comentario.libro', 'libro')
                .where('libro.id = :id', { id })
                .getMany();
        });
    }
};
ComentarioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comentario_entity_1.ComentarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ComentarioService);
exports.ComentarioService = ComentarioService;
//# sourceMappingURL=comentario.service.js.map