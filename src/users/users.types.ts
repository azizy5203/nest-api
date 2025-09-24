export type User = {
  id: number;
  name: string;
  email: string;
  status: UserStatus;
};

export enum UserStatus {
  active = 'active',
  disabled = 'disabled',
  hold = 'hold',
}
