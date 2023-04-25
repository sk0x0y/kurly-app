export interface ISectionMeta {
  recipe: 'default';
  campaign_policy_key: 'default';
  cluster_center_code: 'CC02';
  delivery_type: 'direct';
  default_sort_type?: string;
  sort_type?: string;
  available_sort?: {
    type: string;
    name: string;
  }[];
  query_id: string;
  actual_site: string;
  target_site: string;
  filters: [
    {
      name: string;
      key: string;
      template: string;
      values: {
        key: string;
        name: string;
        value: string;
        product_counts: number;
      }[];
      is_quick: boolean;
    }
  ];
  pagination?: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: {
      next: string;
    };
  };
  is_new?: {
    pc_icon_url: string;
    mobile_icon_url: string;
  };
  recommend?: {
    pc_icon_url: string;
    pc_icon_active_url: string;
  };
}
export interface ISectionData<T> {
  id: number;
  title: string;
  subtitle: string;
  additional_text: string | null;
  template_code: 'main_banner' | 'random_line_banner' | 'today_recommendation';
  template_type: 'main_banner' | 'random_line_banner' | 'today_recommendation';
  event_code: 'main_banner' | 'random_line_banner' | 'today_recommendation';
  data: T;
}
export interface ISection<T> {
  data: T; // ISectionData<T>;
  meta?: ISectionMeta;
}
