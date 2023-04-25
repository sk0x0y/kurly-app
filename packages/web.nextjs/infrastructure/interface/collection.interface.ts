export interface IKurlyCollectionPageMetaData {
  name: string;
  title: string;
  subtitle: string;
  code: 'market-newproduct';
  status: boolean;
  control_type: 'auto';
  sort_type: 'manual';
  display_scope: 'ALL';
  design_kind: 'default';
  pc_thumbnail_url: string;
  mobile_thumbnail_url: string;
  policies: {
    key: 'new_product';
    data: {
      site_key: 'market';
    };
  }[];
  groups: [];
  banners: {
    pc_image: string;
    pc_link: string;
    mobile_image: string;
    mobile_link: string;
  }[];
}
