import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsController } from './units.controller';
import { units } from './units.entity';
import { UnitsService } from './units.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([units])
  ],
  controllers: [UnitsController],
  providers: [UnitsService]
})
export class UnitsModule {}
