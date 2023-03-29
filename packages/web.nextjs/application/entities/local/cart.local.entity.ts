import { ICart } from '../../../infrastructure/interface/cart.interface';

export class CartLocalEntity {
  entity: ICart[];

  constructor() {
    this.entity = [];
  }
}
