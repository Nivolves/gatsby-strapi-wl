export interface ILanguage {
  language: string;
}

export interface ISettingsData {
  settings: {
    DefaultLanguage: {
      language: string;
    };
    FooterLinksColor: string;
    LinksColor: string;
    LinksColorHover: string;
    PrimaryColor: string;
    PrimaryColorHover: string;
  };
  languages: {
    nodes: ILanguage[];
  };
}
