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

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    LoginModule],
  controllers: [AppController, RegistroController],
  providers: [ AppService, JwtService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(LoginMiddleware)
      .exclude(
        {path: 'autor', method: RequestMethod.GET},
        {path: 'libro', method: RequestMethod.GET},
        {path: 'editorial', method: RequestMethod.GET},
        {path: 'genero', method: RequestMethod.GET},
        {path: 'comentario', method: RequestMethod.GET},
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
