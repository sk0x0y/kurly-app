import { IDealProductData } from './product-detail.interface';

export interface ISelectedProduct extends IDealProductData {
  masterName: string;
  mainImageUrl: string;
  count: number;
  checked: boolean;
}
