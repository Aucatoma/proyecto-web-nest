"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const usuario_module_1 = require("./usuario/usuario.module");
const libro_module_1 = require("./libro/libro.module");
const typeorm_1 = require("@nestjs/typeorm");
const tarjeta_credito_controller_1 = require("./tarjeta-credito/tarjeta-credito.controller");
const tarjeta_credito_module_1 = require("./tarjeta-credito/tarjeta-credito.module");
const cabecera_pedido_module_1 = require("./cabecera-pedido/cabecera-pedido.module");
const detalle_pedido_module_1 = require("./detalle-pedido/detalle-pedido.module");
const comentario_module_1 = require("./comentario/comentario.module");
const editorial_module_1 = require("./editorial/editorial.module");
const genero_module_1 = require("./genero/genero.module");
const autor_module_1 = require("./autor/autor.module");
const usuario_tarjeta_module_1 = require("./usuario-tarjeta/usuario-tarjeta.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: 'localhost',
                port: 1433,
                username: 'sa',
                password: 'barcelona',
                database: 'ProyectoWeb',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
                options: { encrypt: true },
            }),
            usuario_module_1.UsuarioModule,
            libro_module_1.LibroModule,
            tarjeta_credito_module_1.TarjetaCreditoModule,
            cabecera_pedido_module_1.CabeceraPedidoModule,
            detalle_pedido_module_1.DetallePedidoModule,
            comentario_module_1.ComentarioModule,
            editorial_module_1.EditorialModule,
            genero_module_1.GeneroModule,
            autor_module_1.AutorModule,
            usuario_tarjeta_module_1.UsuarioTarjetaModule
        ],
        controllers: [app_controller_1.AppController, tarjeta_credito_controller_1.TarjetaCreditoController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map