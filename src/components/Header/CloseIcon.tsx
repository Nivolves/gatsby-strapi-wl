import React from 'react';

import { IMenuButtonProps } from './HeaderTypes';

import './CloseIcon.scss';

const CloseIcon: React.FC<IMenuButtonProps> = ({ openMenu }): JSX.Element => (
  <div className="close-icon-container" onClick={(): void => openMenu()}>
    <div className="close-icon" />
  </div>
);

export default CloseIcon;
