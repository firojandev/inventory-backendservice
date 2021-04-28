import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { title } from 'process';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productService:ProductsService){}

    @Get()
    async findAll(){
        return this.productService.all();
    }

    @Post()
    async create(@Body('category') category:number,@Body('units') units:number,@Body('name') name:string,@Body('model') model:string,
    @Body('warranty') warranty:string,@Body('vat') vat:number,@Body('min_stock') min_stock:number,@Body('image') image:string,
    @Body('description') description:string){
        return this.productService.create({
            category,units,name,model,warranty,vat,min_stock,image,description
        });
    }

    @Get(':id')
    async get(@Param('id') id:number){
        return this.productService.get(id);
    }


    @Put(':id')
    async update(
        @Param('id') id:number,
        @Body('category') category:number,@Body('units') units:number,@Body('name') name:string,@Body('model') model:string,
    @Body('warranty') warranty:string,@Body('vat') vat:number,@Body('min_stock') min_stock:number,@Body('image') image:string,
    @Body('description') description:string
    ){
        return this.productService.update(id,{
            category,units,name,model,warranty,vat,min_stock,image,description
        })
    }

    @Delete(':id')
    async delete(@Param('id') id:number){
        return this.productService.delete(id);
    }


}
