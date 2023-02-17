export interface ChildrenMenu {
  id: number;
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
