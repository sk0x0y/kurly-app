export interface ISection<T> {
  data: {
    id: number;
    title: string;
    subtitle: string;
    additional_text: string | null;
    template_code: 'main_banner' | 'random_line_banner' | 'today_recommendation';
    template_type: 'main_banner' | 'random_line_banner' | 'today_recommendation';
    event_code: 'main_banner' | 'random_line_banner' | 'today_recommendation';
    data: T;
  };
  meta?: {
    recipe: 'default';
    campaign_policy_key: 'default';
    cluster_center_code: 'CC02';
    delivery_type: 'direct';
  };
}
