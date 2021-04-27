import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { units } from './units.entity';

@Injectable()
export class UnitsService {
    constructor(@InjectRepository(units) private unitsRepository:Repository<units>){

    }

    async all(): Promise<units[]>{
        return this.unitsRepository.find();
     }
 
     async create(data){
        return this.unitsRepository.save(data);
     }
 
     async get(id:number):Promise<units> {
        return this.unitsRepository.findOne(id);
     }
 
     async update(id:number,data):Promise<any> {
       return this.unitsRepository.update(id,data);
     }
 
     async delete(id:number):Promise<any> {
        return this.unitsRepository.delete(id);
     }
}
