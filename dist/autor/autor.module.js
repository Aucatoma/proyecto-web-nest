"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const autor_controller_1 = require("./autor.controller");
const autor_service_1 = require("./autor.service");
const typeorm_1 = require("@nestjs/typeorm");
const autor_entity_1 = require("./autor.entity");
let AutorModule = class AutorModule {
};
AutorModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([autor_entity_1.AutorEntity])],
        controllers: [autor_controller_1.AutorController],
        providers: [autor_service_1.AutorService],
    })
], AutorModule);
exports.AutorModule = AutorModule;
//# sourceMappingURL=autor.module.js.map