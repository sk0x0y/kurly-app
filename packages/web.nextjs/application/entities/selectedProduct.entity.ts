import { ISelectedProduct } from '../../infrastructure/interface/selectedProduct.interface';

export class SelectedProductEntity {
  entity: ISelectedProduct[];

  constructor() {
    this.entity = [];
  }
}
