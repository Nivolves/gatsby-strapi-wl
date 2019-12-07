export interface IMenuProps extends IOpenBtnProps {
  isMenuOpen: boolean;
}

export interface IOpenBtnProps {
  menuOpen: () => void;
}
