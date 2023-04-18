export interface IKurlyCategoryDetail {
  code: string;
  name: string;
  parent_names: [];
}
export interface IKurlyCategoryGroupData {
  kind: string;
  code: string;
  name: string;
  position: number;
  pc_icon_url: string;
  pc_icon_active_url: string;
  mobile_icon_url: string;
  mobile_icon_active_url: string;
  thumbnail_url: string;
  is_new: boolean;
  is_show_all: boolean;
  sub_category_groups: {
    kind: string;
    code: string;
    name: string;
  }[];
}

export interface ChildrenMenu {
  id: number;
  subCategoryId: number;
  url: string;
  name: string;
}
export interface SubCategory {
  id: number;
  subCategoryId: number;
  url: string;
  name: string;
}
interface Count {
  available: number;
}

export interface ICategory {
  id: number;
  categoryId?: number;
  image?: {
    default: string;
    active?: string;
  };
  url?: string;
  name: string;
  count?: Count;
  children?: ChildrenMenu[];
}
