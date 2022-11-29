import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('api/student')
export class StudentController {

    constructor( private readonly studentService: StudentService) {}

    @Get()
    async getAll() {
        return await this.studentService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id:number){
        return await this.studentService.findById(id);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: StudentDto) {
        return await this.studentService.create(dto);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() dto:StudentDto) {
        return await this.studentService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.studentService.delete(id);
    }

}