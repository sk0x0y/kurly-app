import { ChildrenMenu, ICategory } from '../../infrastructure/interface/category.interface';

export class CategoryEntity implements ICategory {
  id: number;
  image: {
    default: string;
    active?: string;
  };
  url: string;
  name: string;
  children?: ChildrenMenu[];

  constructor(
    id: number,
    image: {
      default: string;
      active?: string;
    },
    url: string,
    name: string,
    children?: ChildrenMenu[]
  ) {
    this.id = id;
    this.image = image;
    this.url = url;
    this.name = name;
    this.children = children;
  }
}
