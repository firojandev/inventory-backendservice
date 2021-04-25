import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { category } from './category.entity';

@Injectable()
export class CategoryService {

    constructor(@InjectRepository(category) private categoryRepository:Repository<category>){

    }

    async all(): Promise<category[]>{
        return this.categoryRepository.find();
     }
 
     async create(data){
        return this.categoryRepository.save(data);
     }
 
     async get(id:number):Promise<category> {
        return this.categoryRepository.findOne(id);
     }
 
     async update(id:number,data):Promise<any> {
       return this.categoryRepository.update(id,data);
     }
 
     async delete(id:number):Promise<any> {
        return this.categoryRepository.delete(id);
     }


}
