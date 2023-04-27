export interface IProductDetail {
  allergy: string | null;
  isExpectedPoint: boolean; // true;
  expectedPoint: number; // 0;
  expectedPointRatio: number; // 0;
  isMultiplePrice: boolean; // false;
  dealProducts: {
    no: number; // 10001067;
    name: string; // '애플민트 10g';
    isExpectedPoint: boolean; // true;
    expectedPoint: number; // 0;
    expectedPointRatio: number; // 0;
    basePrice: number; // 1990;
    retailPrice: null;
    discountedPrice: null;
    discountRate: number; // 0;
    buyUnit: number; // 1;
    isSoldOut: boolean; // false;
    minEa: number; // 1;
    maxEa: number; // 9999;
    canRestockNotify: boolean; // false;
    isPurchaseStatus: boolean; // true;
    isGiftable: boolean; // false;
    isOnlyAdult: boolean; // false;
    masterProductCode: string; // 'P00000RW000U';
    masterProductName: string; // '애플민트 10g';
    quantity: number; // 0;
  }[];
  deliveryTypeNames: ['샛별배송'];
  basePrice: number; // 1990;
  retailPrice: null;
  discountedPrice: null;
  discountRate: number; // 0;
  expirationDate: string | null;
  extraInfos: [];
  guide: string | null; // '상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.';
  isPurchaseStatus: boolean; // true;
  isGiftable: boolean; // false;
  isOnlyAdult: boolean; // false;
  isReservable: boolean; // false;
  reservationPossibleDates: null;
  isSoldOut: boolean; // false;
  mainImageUrl: string; // 'https://img-cf.kurly.com/shop/data/goods/1591854458157l0.jpg';
  shareImageUrl: string; // 'https://img-cf.kurly.com/shop/data/goods/1591854458851z0.jpg';
  originalImageUrl: string; // 'https://img-cf.kurly.com/shop/data/goods/1591854458157l0.jpg';
  maxEa: number; // 9999;
  minEa: number; // 1;
  name: string; //  '애플민트 10g';
  no: number; // 5001067;
  notSalesText: string; // '';
  soldOutText: string; // '';
  contentType: 'SINGLE';
  isGroupProduct: boolean; // false;
  groupProduct: { groupKeys: []; groupMembers: [] };
  storageTypes: ('COLD' | 'FROZEN' | 'AMBIENT_TEMPERATURE')[];
  productNotice: {
    dealProductNo: number; // 10001067;
    dealProductName: string; //  '애플민트 10g';
    notices: {
      title: string; // '품목 또는 명칭';
      description: string; // '상품설명 및 상품이미지 참조';
    }[];
  }[];
  productOrigin: string | null; // 국산;
  reviewCount: number; // 4971;
  shortDescription: string; // '달콤하고 상큼한 매력';
  todayBrix: null;
  salesUnit: string | null; // '10g';
  volume: string | null; // '1팩';
  canRestockNotify: boolean; //  false;
  productDetail: {
    legacyContent: string; // '<div class="goods_wrap"> <div class="goods_intro"> <div class="pic"> <img src="https://img-cf.kurly.com/shop/data/goodsview/20200611/gv30000100358_1.jpg"> </div> <div class="context last"> <h3> <small>달콤하고 상큼한 매력</small> 애플민트 </h3> <p class="words">싱싱한 허브는 마법처럼 요리의 풍미를 끌어올려 주지요. 컬리를 통해 허브와 한 발짝 더 친해져 보세요. 지금 소개할 허브는 달콤한 사과, 상쾌한 민트의 매력을 동시에 지닌 애플민트입니다. 특히 음료, 칵테일 데커레이션을 위해서 자주 활용되는데요. 모히토는 물론이고 청량감 가득한 에이드에 넣어 즐기기에도 참 좋을 거예요. 앙증맞은 잎사귀에 깃든 달콤 상큼한 향을 손쉽게 누려보세요.</p> </div> </div> <div class="goods_point"> <h3><span>Kurly\'s Check Point</span></h3> <div class="context last"> <div class="pic"> <img src="https://img-cf.kurly.com/shop/data/goodsview/20200611/gv30000100360_1.jpg"> </div> </div> </div><div class="goods_tip">\n                            <h3><span>Kurly’s Tip</span></h3>\n                            <div class="tip_box">\n                            <div class="context"> <div class="pic"> <img src="https://img-cf.kurly.com/shop/data/goodsview/20200611/gv40000100361_1.jpg"> </div>  <p class="words"> <strong>무알콜 모히토를 만들어보세요</strong> <b>・재료</b> : 민트 시럽 30mL, 라임 1/2개, 애플민트, 얼음 적당량, 탄산수 180mL<br> 1. 유리컵에 민트 시럽 30mL를 넣어주세요.<br> 2. 라임 1/2개를 얇게 썰어주세요. <br> 3. 애플민트 특유의 맛과 향이 살아나도록, 애플민트 한 줌을 절구에 넣고 적당히 찧어주세요.<br> 4. 얇게 썬 라임, 찧은 애플민트, 얼음, 탄산수를 컵에 넣고 잘 섞이도록 저어주세요.<br> <b>Tip.</b> 생 애플민트나 라임을 음료 위에 올려 장식해보세요. </p>  <p class="words"> <strong>이렇게 보관하세요</strong> <b>・</b>젖은 키친타월로 감싼 후, 밀폐용기에 담아 냉장 보관하세요. </p> </div>\n                            </div>\n                            </div></div>';
    legacyPiImages: string[]; // ['https://img-cf.kurly.com/shop/data/goodsview/20220712/gv10000336772_1.jpg'];
    legacyEventBanner: string; // '';
    content: [];
  };
  legacyPromotion: null;
  exceptionLabel: null;
  isInquiryWritable: boolean; // true;
  isReviewWritable: boolean; // true;
  afterSaleServiceInfo: string | null; //  '';
  sellerName: string; //  '컬리';
  memberCoupon: {
    newbieLimitDatetime: null;
    newbieMinPrice: number; // 0
  };
  isDirectOrder: boolean; // false;
  directOrderType: 'DEFAULT';
  sellerNotice: {
    title: string; // '판매자';
    description: string; // '컬리';
  }[];
  isThirdPart: boolean; // false;
  productSites: ['MARKET'];
  plcc: {
    isShown: boolean; //  true;
    plccUrl: string; // 'https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/2023/0403/plcc';
    benefits: {
      type: 'ratio';
      value: number; // 5;
      contents: string; // '컬리카드 - 최대 100원 적립 + 첫 결제 3만원 할인';
    }[];
  };
}
