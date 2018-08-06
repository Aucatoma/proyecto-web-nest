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
const login_module_1 = require("./login/login.module");
const login_middleware_1 = require("./middleware/login/login.middleware");
const autor_controller_1 = require("./autor/autor.controller");
const libro_controller_1 = require("./libro/libro.controller");
const cabecera_pedido_controller_1 = require("./cabecera-pedido/cabecera-pedido.controller");
const detalle_pedido_controller_1 = require("./detalle-pedido/detalle-pedido.controller");
const comentario_controller_1 = require("./comentario/comentario.controller");
const usuario_controller_1 = require("./usuario/usuario.controller");
const genero_controller_1 = require("./genero/genero.controller");
const editorial_controller_1 = require("./editorial/editorial.controller");
const usuario_tarjeta_controller_1 = require("./usuario-tarjeta/usuario-tarjeta.controller");
const cors_middleware_1 = require("./middleware/cors/cors.middleware");
const jwt_service_1 = require("./json-web-token/jwt.service");
const registro_module_1 = require("./registro/registro.module");
const speech_text_module_1 = require("./speech-text/speech-text.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(login_middleware_1.LoginMiddleware)
            .exclude({ path: 'autor', method: common_1.RequestMethod.GET }, { path: 'libro', method: common_1.RequestMethod.GET }, { path: 'libro/:id', method: common_1.RequestMethod.GET }, { path: 'autor/libro/:id', method: common_1.RequestMethod.GET }, { path: 'editorial/libro/:id', method: common_1.RequestMethod.GET }, { path: 'genero/libro/:id', method: common_1.RequestMethod.GET }, { path: 'comentario/libro/:id', method: common_1.RequestMethod.GET }, { path: 'usuario/comentario/:id', method: common_1.RequestMethod.GET }, { path: 'comentario/libro/usuario/:id', method: common_1.RequestMethod.GET }, { path: 'editorial', method: common_1.RequestMethod.GET }, { path: 'genero', method: common_1.RequestMethod.GET }, { path: 'comentario', method: common_1.RequestMethod.GET }, { path: 'usuario-tarjeta', method: common_1.RequestMethod.GET }, { path: 'comentario', method: common_1.RequestMethod.POST }, { path: 'cabecera-pedido', method: common_1.RequestMethod.POST }, { path: 'detalle-pedido', method: common_1.RequestMethod.POST })
            .forRoutes(autor_controller_1.AutorController, libro_controller_1.LibroController, cabecera_pedido_controller_1.CabeceraPedidoController, detalle_pedido_controller_1.DetallePedidoController, comentario_controller_1.ComentarioController, usuario_controller_1.UsuarioController, tarjeta_credito_controller_1.TarjetaCreditoController, editorial_controller_1.EditorialController, genero_controller_1.GeneroController, usuario_tarjeta_controller_1.UsuarioTarjetaController)
            .apply(cors_middleware_1.CorsMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: 'localhost',
                port: 1433,
                username: 'marcelo',
                password: 'marcelo',
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
            usuario_tarjeta_module_1.UsuarioTarjetaModule,
            login_module_1.LoginModule,
            registro_module_1.RegistroModule,
            speech_text_module_1.SpeechTextModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, jwt_service_1.JwtService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map