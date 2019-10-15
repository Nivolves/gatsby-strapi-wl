/* eslint-disable react/no-danger */
import React from 'react';

import { ITabProps } from './TabsTypes';

import './Tab.scss';

const Tab: React.FC<ITabProps> = ({ content, isActive, setActiveTab, title }): JSX.Element => (
  <>
    <li className={`tab ${isActive ? 'tab-active' : 'tab-no-active'}`}>
      <h4 onClick={() => setActiveTab(title)} className="tab-title">
        {title}
      </h4>
      <div
        className={`tab-content-accordion ${isActive ? 'tab-content-accordion-active' : 'tab-content-accordion-no-active'}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </li>
  </>
);

export default Tab;
