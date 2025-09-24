import { Controller, Get, Param, Post, Body, Patch, Put, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import {type User} from './users.types'
import {CreateuserDto} from './dto/create-user.dto'


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get("/GetOne/:id")
  getUserById(@Param('id',ParseIntPipe) id: number){
    return this.usersService.getUserById(id);
  }

  @Post("/Add")
  addUser(@Body(ValidationPipe) createuserDto:CreateuserDto){
    return this.usersService.addUser(createuserDto);
  }

  @Put("/Update")
  updateUserById(@Body() user:User):User|undefined{
    return this.usersService.updateUser(user);
  }
}
