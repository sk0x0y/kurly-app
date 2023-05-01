import { ICart } from '../../infrastructure/interface/cart.interface';

export class CartEntity {
  entity: ICart;

  constructor() {
    this.entity = {
      selectedProduct: [],
      productPrice: 0,
      salePrice: 0,
      deliverFee: 0,
    };
  }
}
