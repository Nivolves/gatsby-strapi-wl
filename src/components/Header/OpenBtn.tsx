import React from 'react';

import { IOpenBtnProps } from './HeaderTypes.ts';

import './OpenBtn.scss';

const OpenBtn: React.FC<IOpenBtnProps> = ({ menuOpen }): JSX.Element => (
  <div className="nav-btn">
    <span onClick={menuOpen} />
  </div>
);

export default OpenBtn;
