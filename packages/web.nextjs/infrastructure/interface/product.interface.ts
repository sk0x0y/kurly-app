export interface IKurlyProductData {
  no: number;
  name: string;
  short_description: string;
  list_image_url: string;
  sales_price: number;
  discounted_price: number | null;
  discount_rate: number;
  is_multiple_price: boolean;
  is_buy_now: boolean;
  is_purchase_status: boolean;
  is_giftable: boolean;
  is_only_adult: boolean;
  is_shown: boolean;
  is_sold_out: boolean;
  sold_out_title: string;
  sold_out_text: string;
  can_restock_notify: boolean;
  product_view_status: 'BUY_POSSIBLE' | 'COMMING_SOON';
  not_purchase_message: string;
  delivery_type_names: ['샛별배송', '낮배송'];
  tags: [];
  sticker: null;
  group_product: {
    is_group: boolean;
    is_not_representative: boolean;
  };
  review_count: number;
}
export interface IKurlyProduct {
  data: {
    id: number;
    title: string;
    subtitle: string;
    additional_text: string | null;
    template_code: 'main_banner' | 'random_line_banner' | 'today_recommendation';
    template_type: 'main_banner' | 'random_line_banner' | 'today_recommendation';
    event_code: 'main_banner' | 'random_line_banner' | 'today_recommendation';
    data: IKurlyProductData[];
  };
  meta: {
    recipe: 'default';
    campaign_policy_key: 'default';
    cluster_center_code: 'CC02';
    delivery_type: 'direct';
  };
}

export const StoreType = {
  ROOM_TEMPERATURE: 0, // NOTE: 상온
  FROZEN: 1, // NOTE: 냉동
} as const;
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
export type Price = {
  original: number;
  discount?: {
    rate: number;
    price: number;
  };
};
export interface ISubProduct {
  id: number;
  productId?: number;
  storeType?: typeof StoreType[keyof typeof StoreType];
  name: string;
  price: Price;
}

export interface IProduct {
  id: number;
  categoryId?: number;
  subCategoryId?: number;
  src?: string; // DEPRECATED: 구 이미지 구조 will be deprecated
  image: {
    // NOTE: 새로운 이미지 구조
    src: string;
  };
  storeType?: typeof StoreType[keyof typeof StoreType];
  deliver?: {
    type: typeof DeliverType[keyof typeof DeliverType];
  };
  name: string;
  description?: string;
  price: Price;
  count?: number;
  subProduct?: ISubProduct[];
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
