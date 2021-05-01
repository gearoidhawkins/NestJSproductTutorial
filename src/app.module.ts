import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot(
      'mongodb+srv://Gearoidh:firstdb@cluster0.plohl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
