import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// To root i.e mywebsite.ie/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "App get";
    //return this.appService.getHello();
  }
}
