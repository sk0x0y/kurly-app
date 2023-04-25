import { IKurlyProductData } from './product.interface';
import { ISectionMeta } from './section.interface';

export type SearchQuery = string;

export interface ISearch {
  banners: [];
  data: IKurlyProductData[];
  meta: ISectionMeta;
}
