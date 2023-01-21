export interface IProduct {
  id: string;
  title: string;
  price: string;
}

export interface IAddProduct {
  title: string;
  price: string;
  description: string;
}

export interface IProductAdded extends IAddProduct {
  id: string;
}

export interface IProductDetails extends IAddProduct {
  image: string;
}

export interface IDropdown {
  value: string;
  viewValue: string;
}
