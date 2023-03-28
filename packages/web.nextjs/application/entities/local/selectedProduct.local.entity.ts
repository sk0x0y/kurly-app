import { ISelectedProduct } from '../../../infrastructure/interface/selectedProduct.interface';

export class SelectedProductLocalEntity {
  entity: ISelectedProduct[];

  constructor() {
    this.entity = [{ id: 1 }];
  }
}
