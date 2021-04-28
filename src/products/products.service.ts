import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { products } from './products.entity';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(products) private productsRepository:Repository<products>){

    }

    async all(): Promise<products[]>{
       // return this.productsRepository.find();
       const products = await this.productsRepository.find({ relations: ["category","units"] });
       return products;
     }
 
     async create(data){
        return this.productsRepository.save(data);
     }
 
     async get(id:number):Promise<products> {
        return this.productsRepository.findOne(id);
     }
 
     async update(id:number,data):Promise<any> {
       return this.productsRepository.update(id,data);
     }
 
     async delete(id:number):Promise<any> {
        return this.productsRepository.delete(id);
     }


}
