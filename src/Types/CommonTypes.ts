export interface IChildImageSharp {
  childImageSharp: {
    resize: {
      src: string;
    };
  };
}

export interface IDefaultPage {
  title: string;
  link: string;
}

export interface IDropdawnMenu {
  title: string;
  link: string;
  className: string;
}

export interface IHeaderMenu {
  title: string;
  link?: string;
  className: string;
  children?: IDropdawnMenu[];
}

export interface IMenu {
  language: {
    language: string;
  };
  link: string;
  order: number;
  parentPage: {
    title: string;
  };
  title: string;
  type: string | null;
}

export interface IMenuData {
  menu: {
    nodes: IMenu[];
  };
  settings: {
    Logo: IChildImageSharp;
    siteName: string;
  };
}

export interface IPageType {
  defaultpages: IDefaultPage[];
  type: string;
}

export interface IPageTypes {
  pageTypes: {
    nodes: IPageType[];
  };
}
