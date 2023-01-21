interface ChildrenMenu {
  id: number;
  url: string;
  name: string;
}

export interface IHamburgerMenu {
  id: number;
  image: {
    default: string;
    active?: string;
  };
  url: string;
  name: string;
  children?: ChildrenMenu[];
}
