import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { products } from './products.entity';
import { ProductsService } from './products.service';

@Module({
    imports:[
      TypeOrmModule.forFeature([products])
    ],
    controllers: [ProductsController],
    providers: [ProductsService]
  })
  export class ProductsModule {}