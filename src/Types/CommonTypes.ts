export interface IImage {
  childImageSharp: {
    fluid: {
      src: string;
    };
  };
  name: string;
}

export interface ILogo {
  settings: {
    logo: IImage;
    name: string;
  };
}

export interface IMainAbout {
  aboutUs: {
    title: string;
    subtitle: string;
    mainpage_content: string;
    link_text: string;
    main_page_photo: IImage;
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
