export const DeliverType = {
  FAST: 0, // NOTE: 샛별배송
  SLOW: 1, // NOTE: 택배배송
} as const;

export type Paragraph = {
  id: number;
  title?: string;
  text?: string;
  description?: { weight: string; characteristics: string };
};
export interface IContent {
  title?: string;
  subTitle?: string;
  image?: {
    id: number;
    src: string;
    width?: string;
    height?: number;
    paragraph?: Paragraph[];
  }[];
  description?: string;
}
export type IntroType = { image?: { src: string } } & Omit<IContent, 'image'>;

export interface IProduct {
  id: number;
  src?: string; // DEPRECATED: 구 이미지 구조 will be deprecated
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
  notice?: { id: number; label: string; title: string; description?: string }[];
  content?: {
    intro?: IntroType;
    checkpoint?: IContent;
    pick?: IContent;
    tip?: IContent;
    note?: IContent;
    about?: IContent;
  };
  review?: {
    count: number;
  };
  tags?: string[]; // TODO: 추후 태그 컴포넌트가 담길 것
}
