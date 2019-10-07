import React from 'react';

import { IMenuButtonProps } from './HeaderTypes';

import './MenuBtn.scss';

const MenuButton: React.FC<IMenuButtonProps> = ({ openMenu }) => (
  <div className="nav-btn" onClick={(): void => openMenu()}>
    <span />
  </div>
);

export default MenuButton;
