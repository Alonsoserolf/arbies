import { Injectable } from '@nestjs/common';
import { HumanModel } from './human.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HumanDTO } from './human.dto';

@Injectable()
export class HumanService {
    constructor(
        @InjectRepository(HumanModel)
        private humanRepository: Repository<HumanModel>,
      ) {}

      create(details: HumanDTO): Promise<HumanModel>{
          return this.humanRepository.save(details);
      }

      findAll(): Promise<HumanModel[]> {
        return this.humanRepository.find();
      }

      findOne(id: string): Promise<HumanModel> {
        return this.humanRepository.findOne(id);
      }
}
