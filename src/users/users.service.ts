import { Injectable, NotFoundException } from '@nestjs/common';
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
    { id: 4, name: 'Jill', email: 'jill@gmail.com', status: UserStatus.hold },
    { id: 5, name: 'Jack', email: 'jack@gmail.com', status: UserStatus.hold },
    { id: 6, name: 'Jill', email: 'jill@gmail.com', status: UserStatus.active },
    { id: 7, name: 'Jack', email: 'jack@gmail.com', status: UserStatus.active },
  ];

  getAllUsers(name?): User[] | NotFoundException {
    if (name) {
      const users = this.users.filter(
        (u) => u.name.toLowerCase() == name.toLowerCase(),
      );
      if (users.length == 0)
        return new NotFoundException(`Users with the name "${name}" not found`);
      return users;
    }
    return this.users;
  }

  getUserById(id: number): User | NotFoundException {
    const user = this.users.find((user) => user.id == id);
    if (!user) return new NotFoundException('User Not Found!');
    return user;
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
