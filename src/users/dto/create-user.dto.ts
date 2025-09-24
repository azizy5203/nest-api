import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { UserStatus } from '../users.types';
export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(UserStatus, {
    message: `Status has to be one of (${Object.keys(UserStatus).join(', ')})`,
  })
  status: UserStatus;
}
