import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { LibroModule } from './libro/libro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarjetaCreditoController } from './tarjeta-credito/tarjeta-credito.controller';
import { TarjetaCreditoModule } from './tarjeta-credito/tarjeta-credito.module';
import { CabeceraPedidoModule } from './cabecera-pedido/cabecera-pedido.module';
import { DetallePedidoModule } from './detalle-pedido/detalle-pedido.module';
import { ComentarioModule } from './comentario/comentario.module';
import { EditorialModule } from './editorial/editorial.module';
import { GeneroModule } from './genero/genero.module';
import { AutorModule } from './autor/autor.module';
import { UsuarioTarjetaModule } from './usuario-tarjeta/usuario-tarjeta.module';
import { LoginModule } from './login/login.module';
import { LoginMiddleware } from './middleware/login/login.middleware';
import { AutorController } from './autor/autor.controller';
import { LibroController } from './libro/libro.controller';
import { CabeceraPedidoController } from './cabecera-pedido/cabecera-pedido.controller';
import { DetallePedidoController } from './detalle-pedido/detalle-pedido.controller';
import { ComentarioController } from './comentario/comentario.controller';
import { UsuarioController } from './usuario/usuario.controller';
import { GeneroController } from './genero/genero.controller';
import { EditorialController } from './editorial/editorial.controller';
import { UsuarioTarjetaController } from './usuario-tarjeta/usuario-tarjeta.controller';
import { RegistroController } from './registro/registro.controller';
import { CorsMiddleware } from './middleware/cors/cors.middleware';
import { JwtService } from './json-web-token/jwt.service';
import { UsuarioService } from './usuario/usuario.service';
import { RegistroModule } from './registro/registro.module';
import { SpeechTextController } from './speech-text/speech-text.controller';
import { SpeechTextService } from './speech-text/speech-text.service';
import { SpeechTextModule } from './speech-text/speech-text.module';
import { UsuarioTarjetaService } from './usuario-tarjeta/usuario-tarjeta.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    UsuarioModule,
    LibroModule,
    TarjetaCreditoModule,
    CabeceraPedidoModule,
    DetallePedidoModule,
    ComentarioModule,
    EditorialModule,
    GeneroModule,
    AutorModule,
    UsuarioTarjetaModule,
    LoginModule,
    RegistroModule,
    SpeechTextModule],
  controllers: [AppController],
  providers: [ AppService, JwtService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(LoginMiddleware)
      .exclude(
        {path: 'autor', method: RequestMethod.GET},
        {path: 'libro', method: RequestMethod.GET},
        {path: 'libro/:id', method: RequestMethod.GET},
        {path: 'autor/libro/:id', method: RequestMethod.GET},
        {path: 'editorial/libro/:id', method: RequestMethod.GET},
        {path: 'genero/libro/:id', method: RequestMethod.GET},
        {path: 'comentario/libro/:id', method: RequestMethod.GET},
        {path: 'usuario/comentario/:id', method: RequestMethod.GET},
        {path: 'comentario/libro/usuario/:id', method: RequestMethod.GET},
        {path: 'editorial', method: RequestMethod.GET},
        {path: 'genero', method: RequestMethod.GET},
        {path: 'comentario', method: RequestMethod.GET},
        {path: 'usuario-tarjeta', method: RequestMethod.GET},
        {path: 'comentario', method: RequestMethod.POST},
        {path: 'cabecera-pedido', method: RequestMethod.POST},
        {path: 'detalle-pedido', method: RequestMethod.POST},
        )
      .forRoutes(
        AutorController,
        LibroController,
        CabeceraPedidoController,
        DetallePedidoController,
        ComentarioController,
        UsuarioController,
        TarjetaCreditoController,
        EditorialController,
        GeneroController,
        UsuarioTarjetaController)
      .apply(CorsMiddleware)
      .forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
