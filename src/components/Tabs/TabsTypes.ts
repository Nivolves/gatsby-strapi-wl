import { ITab } from '../../Types/CommonTypes';

export interface ITabProps {
  content: string;
  isActive: boolean;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}

export interface ITabContentProps {
  content: string;
  isActive: boolean;
}

export interface ITabsProps {
  tabs: ITab[];
}
