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
  id?: number,
  username: string,
  password: string,
  vocation: string,
  level: number,
}

export interface ILogin {
  username: string,
  password: string,
}

export interface IJwt {
  username: string,
  id?: number,
}

export interface IOrder {
  id: number,
  userId: number,
  productId: number[];
}