export interface IProduct {
  id: number;
  src: string;
  name: string;
  price: {
    original: number;
    discount?: {
      rate: number;
      price: number;
    };
  };
}
