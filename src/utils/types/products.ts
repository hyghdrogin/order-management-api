export interface ProductInterface extends ProductData {
  id: number;
}

export interface ProductData {
  name: string;
  quantity: number;
  price: number;
}
