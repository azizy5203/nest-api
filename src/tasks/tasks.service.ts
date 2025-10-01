import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.databaseService.task.create({
      data: createTaskDto,
    });
  }

  findAll() {
    return this.databaseService.task.findMany({ take: 10 });
  }

  async findOne(id: number) {
    const task = await this.databaseService.task.findFirst({
      where: { id },
    });
    if (!task) return new NotFoundException();
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.databaseService.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
