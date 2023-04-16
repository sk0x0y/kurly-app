export interface ISectionMeta {
  recipe: 'default';
  campaign_policy_key: 'default';
  cluster_center_code: 'CC02';
  delivery_type: 'direct';
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
  sort_type?: string;
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
  data: ISectionData<T> | T;
  meta?: ISectionMeta;
}
