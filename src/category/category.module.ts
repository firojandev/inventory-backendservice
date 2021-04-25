import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { category } from './category.entity';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([category])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
