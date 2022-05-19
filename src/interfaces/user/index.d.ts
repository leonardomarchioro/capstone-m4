export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserListOne {
  userId: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  phone?: string;
}

export interface IPasswordUpdate {
  userId: string;
  newPassword: string;
}
