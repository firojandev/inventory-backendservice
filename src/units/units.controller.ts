import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {

    constructor(private unitsService:UnitsService){}

    @Get()
    async findAll(){
        return this.unitsService.all();
    }

    @Post()
    async create(@Body('name') name:string){
        return this.unitsService.create({
            name
        });
    }

    @Get(':id')
    async get(@Param('id') id:number){
        return this.unitsService.get(id);
    }


    @Put(':id')
    async update(
        @Param('id') id:number,
        @Body('name') name:string,
    ){
        return this.unitsService.update(id,{
            name
        })
    }

    @Delete(':id')
    async delete(@Param('id') id:number){
        return this.unitsService.delete(id);
    }

}
