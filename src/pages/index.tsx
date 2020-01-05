import React from 'react';
import AboutUS from '../components/AboutUs/AboutUs';
import MainPageServices from '../components/MainPageServices/MainPageServices';

const IndexPage: React.FC = (): JSX.Element => {
  return (
    <div>
      <AboutUS />
      <MainPageServices />
    </div>
  );
};
export default IndexPage;
