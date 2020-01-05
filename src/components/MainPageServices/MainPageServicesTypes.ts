import { IService } from '../../Types/CommonTypes';

export default interface IMainPageServices {
  allStrapiServices: {
    services: IService[];
  };
  block: {
    title: string;
  };
}
