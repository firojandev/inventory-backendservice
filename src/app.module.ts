import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsModule } from './units/units.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: '123456',
      database: 'inventory',
      autoLoadEntities:true,
      synchronize: true,
    }),
  CategoryModule,
  UnitsModule,
  ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
