import { ICart } from '../../../infrastructure/interface/cart.interface';

export class CartLocalEntity {
  entity: ICart;

  constructor() {
    this.entity = {
      selectedProduct: [{ id: 1, name: '[멘베이] 명란 센베이 플레인', price: { original: 12500 }, count: 1 }],
      productPrice: 0,
      salePrice: 0,
      deliverFee: 0,
    };
  }
}
