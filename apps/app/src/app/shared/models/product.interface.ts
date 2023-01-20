export interface Product {
  id: string; // Todo: Can id be optional?!!!
  title: string;
  price: string;
}

export interface AddProduct extends Product {
  description: string;
}

export interface IProductDetails {
  title: string;
  description: string;
  price: number;
  image: string;
}
