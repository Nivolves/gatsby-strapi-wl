import { IDropdawnMenu } from '../../Types/CommonTypes';

export interface IDropdawnProps {
  children: IDropdawnMenu[];
  className: string;
  isMenuOpen: boolean;
  openMenu: () => void;
  title: string;
}

export interface ILogoProps {
  alt: string;
  logo: string;
  path: string;
}

export interface IMenuButtonProps {
  openMenu: () => void;
}

export interface IMenuProps {
  isMenuOpen: boolean;
  language: string;
  openMenu: () => void;
}

export interface ISecondaryHeader {
  isMenuOpen: boolean;
  openMenu: () => void;
}
