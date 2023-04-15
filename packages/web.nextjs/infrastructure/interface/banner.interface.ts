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
