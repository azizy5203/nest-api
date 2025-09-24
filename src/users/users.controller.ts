import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { type User } from './users.types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post('/Add')
  addUser(@Body(ValidationPipe) createuserDto: CreateUserDto) {
    return this.usersService.addUser(createuserDto);
  }

  @Put('/Update')
  updateUser(
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ): User | undefined {
    return this.usersService.updateUser(updateUserDto);
  }
}
