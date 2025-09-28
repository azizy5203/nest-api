import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { type User, UserStatus } from './users.types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('users') // groups endpoints in Swagger UI
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Filter users by name',
    type: String,
  })
  getAllUsers(@Query('name') name?: string) {
    return this.usersService.getAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post('/Add')
  @ApiBody({
    description: 'Example of user creation request',
    type: CreateUserDto,
    examples: {
      valid: {
        summary: 'Valid Request',
        value: {
          name: 'john doe',
          email: 'john@example.com',
          status: UserStatus.active,
        },
      },
      invalid: {
        summary: 'Invalid Request',
        value: {
          name: '',
          email: 'not-an-email',
          status: 'status invalid',
        },
      },
    },
  })
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
