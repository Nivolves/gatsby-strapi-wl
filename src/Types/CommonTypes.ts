export interface IAddress {
  address: string;
}

export interface IChildImageSharp {
  childImageSharp: {
    resize: {
      src: string;
    };
  };
}

export interface IContacts {
  addresses: IAddress[];
  language: {
    language: string;
  };
  phones: IPhone[];
  title: string;
}

export interface IContactsData {
  contacts: {
    nodes: IContacts[];
  };
}

export interface IDefaultPage {
  link: string;
  title: string;
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
  language: {
    language: string;
  };
  title: string;
}

export interface IPageTypes {
  pageTypes: {
    nodes: IPageType[];
  };
}

export interface IPhone {
  phone: string;
}

export interface ISecondaryHeader {
  language: {
    language: string;
  };
  link: string;
  title: string;
}

export interface ISecondaryHeaderData {
  secondaryHeader: {
    nodes: ISecondaryHeader[];
  };
}
