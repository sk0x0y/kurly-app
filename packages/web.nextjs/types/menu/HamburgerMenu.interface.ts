interface ChildrenMenu {
  id: number;
  url: string;
  name: string;
}

export interface IHamburgerMenu {
  id: number;
  image: {
    src: string;
  };
  url: string;
  name: string;
  children?: ChildrenMenu[];
}
