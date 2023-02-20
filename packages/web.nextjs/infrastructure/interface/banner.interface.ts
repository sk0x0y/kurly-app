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
