/* eslint-disable react/no-danger */
import React from 'react';

import { ITabContentProps } from './TabsTypes';

const TabContent: React.FC<ITabContentProps> = ({ content, isActive }): JSX.Element => (
  <div
    className={`tab-content ${isActive ? 'tab-content-active' : 'tab-content-no-active'}`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default TabContent;
