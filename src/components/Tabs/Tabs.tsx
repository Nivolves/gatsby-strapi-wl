import React, { useState } from 'react';

import Tab from './Tab';
import TabContent from './TabContent';

import { ITab } from '../../Types/CommonTypes';
import { ITabsProps } from './TabsTypes';

import './Tabs.scss';

const Tabs: React.FC<ITabsProps> = ({ tabs }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].title);
  return (
    <div className="tabs-container">
      <ul className="tabs">
        {tabs.map(
          ({ content, title }: ITab): JSX.Element => (
            <Tab key={title} content={content} isActive={title === activeTab} setActiveTab={setActiveTab} title={title} />
          )
        )}
      </ul>
      {tabs.map(
        ({ content, title }: ITab): JSX.Element => (
          <TabContent key={title} content={content} isActive={title === activeTab} />
        )
      )}
    </div>
  );
};

export default Tabs;
