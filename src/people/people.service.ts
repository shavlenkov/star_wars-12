import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './entities/people.entity';

import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';

import {CreatePeopleDto} from "./dto/create-people.dto";

@Injectable()
export class PeopleService {
    constructor(
        @InjectRepository(People)
        private peopleRepository: Repository<People>,
    ) {}


    paginate(options: IPaginationOptions): Promise<Pagination<People>> {
        return paginate<People>(this.peopleRepository, options);
    }

    store(data: CreatePeopleDto) {
        return this.peopleRepository.save(data);
    }

    delete(id: number) {
        this.peopleRepository.delete(id);

        return 'ok';

    }


}
