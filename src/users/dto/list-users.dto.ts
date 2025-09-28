import { type User } from '../users.types';

export class ListUsersDto {
  Data: User[];
  Total: number;
}
