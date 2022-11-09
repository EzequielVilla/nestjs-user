import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Request } from 'express';

@Controller('/api/saludos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hola')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/chau')
  getChau(): string {
    return 'chau';
  }
  @Get('/:saludo')
  getSaludoPersonalizado(@Param('saludo') saludo: string): string {
    return saludo;
  }
  // @Post("/")
}
