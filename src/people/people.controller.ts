import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';

import {PeopleService} from "./people.service";
import {CreatePeopleDto} from "./dto/create-people.dto";
import {Pagination} from "nestjs-typeorm-paginate";
import {People} from "./entities/people.entity";

@Controller('people')
export class PeopleController {
    constructor(private peopleService: PeopleService) {}

    @Get()
    index(@Query('page') page: number = 1, @Query('limit') limit: number = 10 ): Promise<Pagination<People>> {
        limit = limit > 100 ? 100 : limit;

        return this.peopleService.paginate({page, limit});
    }

    @Post()
    create(@Body() createPeopleDto: CreatePeopleDto) {
        return this.peopleService.store(createPeopleDto)
    }

    @Delete('/:id')
    remove(@Param('id', ParseIntPipe) id) {
        return this.peopleService.delete(id);
    }

}
