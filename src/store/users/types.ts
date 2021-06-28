export interface User {
  id: string;
  name: string;
  avatar: string;
}

export type UsersState = { [key in string]: User };
