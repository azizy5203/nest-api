import { Injectable } from '@nestjs/common';
import { type User } from './users.types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserStatus } from './users.types';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      status: UserStatus.disabled,
    },
    { id: 2, name: 'Jane', email: 'jane@gmail.com', status: UserStatus.active },
    { id: 3, name: 'Jim', email: 'jim@gmail.com', status: UserStatus.active },
    { id: 4, name: 'Jill', email: 'jill@gmail.com', status: UserStatus.active },
    { id: 5, name: 'Jack', email: 'jack@gmail.com', status: UserStatus.active },
    { id: 6, name: 'Jill', email: 'jill@gmail.com', status: UserStatus.active },
    { id: 7, name: 'Jack', email: 'jack@gmail.com', status: UserStatus.active },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id == id);
  }

  addUser(createuserDto: Omit<CreateUserDto, 'id'>): User {
    const addedUser = { id: this.users.length + 1, ...createuserDto };
    this.users.push(addedUser);
    return addedUser;
  }

  updateUser(updateUserDto: UpdateUserDto): User | undefined {
    const targetUserIndex = this.users.findIndex(
      (user) => user.id == updateUserDto.id,
    );
    if (targetUserIndex) {
      const updatedUser = { ...this.users[targetUserIndex], ...updateUserDto };
      this.users.splice(targetUserIndex, 1, updatedUser);
      return this.users.find((user) => user.id == updateUserDto.id);
    }
  }
}
