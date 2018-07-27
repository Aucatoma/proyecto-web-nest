import { Body, Controller, HttpCode, NotFoundException, Post, UsePipes } from '@nestjs/common';
import { LoginPipe } from './login.pipe';
import { LOGIN_SCHEMA } from './login.schema';
import { Login } from './login';
import { LoginService } from './login.service';
import { NoEncontradoException } from '../exception/no-encontrado/no-encontrado.exception';
import { JwtService } from '../json-web-token/jwt.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly _loginService: LoginService,
    private readonly _jwtService: JwtService,
  ){}

  @Post()
  @HttpCode(200)
  @UsePipes(new LoginPipe(LOGIN_SCHEMA))
  async login(@Body() login: Login){
    const usuario = await this._loginService.findForLogin(login.username, login.contrasenia);
    if (usuario){
      return `{ "token": "${this._jwtService.emitirToken(usuario.username)}" }`;
    }
    throw new NoEncontradoException('Something went wrong. Please, try again.');
  }
}
