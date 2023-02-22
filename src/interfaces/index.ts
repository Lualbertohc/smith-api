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
