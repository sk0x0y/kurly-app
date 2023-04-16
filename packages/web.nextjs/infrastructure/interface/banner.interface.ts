export interface IKurlyPromotionBannerData {
  id: number;
  title: string;
  contents: string;
  image: string;
  mobileImage: string;
  link: string;
  mobileLink: string;
  sort: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  giveawayId: any;
}

export interface IKurlyBannerData {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
  link: string;
  background_color?: string;
}

export interface IBanner {
  id: number;
  url?: string;
  image?: {
    src: string;
    size?: {
      width?: number;
      height?: number;
    };
  };
}
