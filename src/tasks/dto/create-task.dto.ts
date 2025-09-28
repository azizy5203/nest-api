import {
  IsEnum,
  IsOptional,
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { TaskStatus } from '@prisma/client';

export class CreateTaskDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  progress: number;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
