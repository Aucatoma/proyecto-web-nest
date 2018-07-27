import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';

@Module({
  exports: [UsuarioService],
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
