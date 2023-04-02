import { ISelectedProduct } from './selectedProduct.interface';

export interface ICart {
  selectedProduct: ISelectedProduct[];
  productPrice: number;
  salePrice: number;
  deliverFee: number;
}
