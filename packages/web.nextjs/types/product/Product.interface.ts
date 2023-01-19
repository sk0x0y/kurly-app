const DeliverType = {
  FAST: 0, // NOTE: 샛별배송
  SLOW: 1, // NOTE: 택배배송
} as const;

export interface IProduct {
  id: number;
  src: string; // TODO: 구 이미지 구조 will be deprecated
  image: {
    // NOTE: 새로운 이미지 구조
    src: string;
  };
  deliver?: {
    type: typeof DeliverType[keyof typeof DeliverType];
  };
  name: string;
  description?: string;
  price: {
    original: number;
    discount?: {
      rate: number;
      price: number;
    };
  };
  tags?: string[]; // TODO: 추후 태그 컴포넌트가 담길 것
}
