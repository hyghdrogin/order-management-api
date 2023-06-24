export interface IOrder extends OrderData {
  id: number;
  status: string;
}

export interface OrderData {
  email: string;
  productName: string;
  quantity: number;
}
