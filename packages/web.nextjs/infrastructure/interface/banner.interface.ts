export interface IKurlyBannerData {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
  link: string;
  background_color?: string;
}
export interface IKurlyBanner {
  id: number;
  title: string;
  subtitle: string;
  additional_text: null;
  template_code: 'main_banner' | 'random_line_banner';
  template_type: 'main_banner' | 'random_line_banner';
  event_code: 'main_banner' | 'random_line_banner';
  data: IKurlyBannerData[];
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
