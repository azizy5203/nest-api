import { Injectable } from '@nestjs/common';
import {type User} from "./users.types"

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

  getUserById(id:number): User|undefined{
    return this.users.find(user=>user.id==id)
  }

  addUser(user:Omit<User,'id'>):User{
    const addedUser = {id:this.users.length+1,...user}
    this.users.push(addedUser)
    return addedUser
  }

  updateUser(userUpdate:User):User|undefined{
    const targetUserIndex = this.users.findIndex(user=>user.id==userUpdate.id)
    if(targetUserIndex){
      this.users.splice(targetUserIndex,1,userUpdate)
      return this.users.find(user=>user.id==userUpdate.id)
    }
  }

}
