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

export interface IServiceSolution {
  id: number | string;
  solutionName: string;
  svg: string;
  description: string;
  service: number;
}

export interface IService {
  service: {
    id: number | string;
    serviceName: string;
    svg: string;
    description: string;
    serviceSolutions: IServiceSolution[];
  };
}

export interface IMainAbout {
  aboutUs: {
    title: string;
    subtitle: string;
    mainPageContent: string;
    linkText: string;
    link: string;
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
