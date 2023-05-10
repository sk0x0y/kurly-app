import { ISelectedProduct } from './selectedProduct.interface';

export interface ICart {
  selectedProduct: ISelectedProduct[];
  productPrice: number;
  salePrice: number;
  deliverFee: number;
}
export type CartProductDetailDataStorageType = 'COLD' | 'FROZEN' | 'AMBIENT_TEMPERATURE';
export interface ICartProductDetailData {
  masterProductName: string;
  masterProductCode: string;
  masterProductNo: number;
  dealProductName: string;
  dealProductCode: string;
  dealProductNo: number;
  contentsProductName: string;
  contentsProductCode: string;
  contentsProductNo: number;
  imageUrl: string;
  quantity: number;
  productPrice: number;
  discountPrice: number;
  retailPrice: number;
  isSoldOut: boolean;
  isSale: boolean;
  minQuantity: number;
  maxQuantity: number | null;
  minQuantityInContents: number;
  maxQuantityInContents: number | null;
  salesUnit: number;
  storageType: CartProductDetailDataStorageType;
  tagNames: null;
  soldOutText: string;
  soldOutType: 'COMING_SOON';
  pointPolicy: 'MEMBER';
  isNotEnoughStock: boolean;
  supportDelivery: ('KURLY_PARCEL' | 'KURLY_DAWN')[];
  deliveryTypeInfos: {
    deliveryType: 'DAWN' | 'DAY_PARCEL';
    isDeliveryProduct: boolean;
  }[];
  exceptionLabel: null;
  normalOrderTypePolicyInContents: 'DEFAULT';
  giftOrderTypePolicyInContents: 'SINGLE_DIRECT_ORDER';
  deliveryPriceType: 'PAY';
  createdAt: string;
  isSingleProduct: boolean;
  isShow: boolean;
  couponEndDateText: string;
  legacyPromotion: null;
  legacyCoupon: null;
  isRetired: boolean;
  isExtraStockSoldOut: boolean;
  useExtraStockWhenOrder: boolean;
  activatedExtraStock: boolean;
  order: {
    status: 'AVAILABLE';
    unavailableTypes: [];
  };
}
export interface ICartDetail {
  success: boolean;
  message: string | null;
  data: {
    meta: {
      legacyCouponMessage: string;
      isEarlyBird: boolean;
      activatedContinuity: boolean;
    };
    totalCount: number;
    dealProducts: ICartProductDetailData[];
    displayMessage: {
      deliveryNotice: {
        text: '';
      };
    };
  };
}
