import { Injectable } from '@nestjs/common';

type User = {
  id: number;
  name: string;
  email: string;
};

@Injectable()
export class UsersService {
  users: User[] = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Jane', email: 'jane@gmail.com' },
    { id: 3, name: 'Jim', email: 'jim@gmail.com' },
    { id: 4, name: 'Jill', email: 'jill@gmail.com' },
    { id: 5, name: 'Jack', email: 'jack@gmail.com' },
    { id: 6, name: 'Jill', email: 'jill@gmail.com' },
    { id: 7, name: 'Jack', email: 'jack@gmail.com' },
  ];

  getAllUsers(): User[] {
    return this.users;
  }
}
