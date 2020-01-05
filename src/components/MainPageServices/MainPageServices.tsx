import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import IMainPageServices from './MainPageServicesTypes';
import Service from './Service';
import './MainPageServices.scss';

const SERVICEQUERY = graphql`
  query ServicesQuery {
    allStrapiServices(filter: { mainpageservice: { id: { eq: 1 } } }) {
      services: edges {
        service: node {
          strapiId
          id
          svg
          serviceName: name
          description
          serviceSolutions: servicesolutions {
            id
            solutionName: name
          }
        }
      }
    }
    block: strapiMainpageservices {
      title
    }
  }
`;

const MainPageServices: React.FC = (): JSX.Element => {
  const {
    allStrapiServices: { services },
    block: { title },
  }: IMainPageServices = useStaticQuery(SERVICEQUERY);
  return (
    <section className="main-services">
      <div>
        <h2>{title}</h2>
        <div>
          {services.map(({ service }) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPageServices;
