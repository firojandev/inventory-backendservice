import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { title } from 'process';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor(private categoryService:CategoryService){}

    @Get()
    async findAll(){
        return this.categoryService.all();
    }

    @Post()
    async create(@Body('title') title:string){
        return this.categoryService.create({
            title
        });
    }

    @Get(':id')
    async get(@Param('id') id:number){
        return this.categoryService.get(id);
    }


    @Put(':id')
    async update(
        @Param('id') id:number,
        @Body('title') title:string,
    ){
        return this.categoryService.update(id,{
            title
        })
    }

    @Delete(':id')
    async delete(@Param('id') id:number){
        return this.categoryService.delete(id);
    }


}
