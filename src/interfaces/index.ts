export interface INewProduct {
  id?: number,
  name: string,
  amount: string,
  type?: number,
  message?: string,
}

export interface IProduct {
  orderId: number | null,
}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
  id?: number,
}

export interface ILogin {
  username: string,
  password: string,
}

export interface IJwt {
  username: string,
  id?: number,
}
