import { ICart, ICartDetail } from '../../infrastructure/interface/cart.interface';

export class CartEntity {
  entity: ICart;
  detail: ICartDetail;

  constructor() {
    this.entity = {
      selectedProduct: [],
      productPrice: 0,
      salePrice: 0,
      deliverFee: 0,
    };
    this.detail = {
      data: {
        dealProducts: [],
        displayMessage: {
          deliveryNotice: {
            text: '',
          },
        },
        meta: {
          activatedContinuity: false,
          isEarlyBird: false,
          legacyCouponMessage: '',
        },
        totalCount: 0,
      },
      message: null,
      success: false,
    };
  }
}
