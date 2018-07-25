import { Module } from '@nestjs/common';
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
import { JwtService } from './json-web-token/jwt.service';
import { LoginController } from './login/login.controller';
import { UsuarioService } from './usuario/usuario.service';
import { LoginModule } from './login/login.module';

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
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule {}
