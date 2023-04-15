import { IKurlyProductData } from './product.interface';

export interface IRandomCollection {
  collection_code: 'special-price';
  has_more: boolean;
  products: IKurlyProductData[];
}
