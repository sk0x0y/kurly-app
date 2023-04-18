export interface IFilterData {
  key: string;
  name: string;
  value: string;
  product_counts: number;
}
export interface IFilter {
  name: string;
  key: string;
  template: string;
  is_quick: true;
  values: IFilterData[];
}
export type FilterType = 'market-newproduct' | 'market-best' | 'market-time-sales';
