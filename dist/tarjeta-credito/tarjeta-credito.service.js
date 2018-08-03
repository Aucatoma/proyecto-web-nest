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
const typeorm_2 = require("typeorm");
const tarjeta_credito_entity_1 = require("./tarjeta-credito.entity");
const usuario_tarjeta_entity_1 = require("../usuario-tarjeta/usuario-tarjeta.entity");
let TarjetaCreditoService = class TarjetaCreditoService {
    constructor(_tarjetaRepository, _usuarioTarjetaRepository) {
        this._tarjetaRepository = _tarjetaRepository;
        this._usuarioTarjetaRepository = _usuarioTarjetaRepository;
    }
    findByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._tarjetaRepository
                .createQueryBuilder('tarjeta_credito')
                .innerJoin('tarjeta_credito.usuariosTarjetas', 'usuarios_tarjetas')
                .select('tarjeta_credito')
                .where('usuarios_tarjetas.usuario = :id', { id })
                .getMany();
        });
    }
    insert(id, tarjeta) {
        return __awaiter(this, void 0, void 0, function* () {
            const tarjetaPreload = yield this._tarjetaRepository.save(tarjeta);
            const usuarioTarjeta = this._usuarioTarjetaRepository.create({
                usuario: { id },
                tarjetaCredito: { id: tarjetaPreload.id },
            });
            yield this._usuarioTarjetaRepository.insert(usuarioTarjeta);
            return tarjetaPreload;
        });
    }
    update(tarjeta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._tarjetaRepository.save(tarjeta);
        });
    }
    delete(id_usuario, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._usuarioTarjetaRepository.delete({
                usuario: { id: id_usuario },
                tarjetaCredito: { id }
            });
        });
    }
};
TarjetaCreditoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tarjeta_credito_entity_1.TarjetaCreditoEntity)),
    __param(1, typeorm_1.InjectRepository(usuario_tarjeta_entity_1.UsuarioTarjetaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TarjetaCreditoService);
exports.TarjetaCreditoService = TarjetaCreditoService;
//# sourceMappingURL=tarjeta-credito.service.js.map