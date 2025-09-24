import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateuserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
