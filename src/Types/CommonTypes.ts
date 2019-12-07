export interface IImage {
  childImageSharp: {
    fluid: {
      src: string;
    };
  };
}

export interface ILogo {
  settings: {
    logo: IImage;
    name: string;
  };
}

export interface IMenu {
  link: string;
  title: string;
}

export interface IMenuData {
  menu: {
    nodes: IMenu[];
  };
}

export interface ISocialIcons {
  icon: string;
  link: string;
}

export interface ISocialIconsData {
  socialIcons: {
    nodes: ISocialIcons[];
  };
}
