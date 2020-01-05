import React from 'react';
import { IService } from '../../Types/CommonTypes';
import Arrow from '../../assets/images/illustrations/download-arrow.png';
import './Service.scss';

const Service = (service: IService): JSX.Element => {
  const {
    service: { serviceName, description, svg, serviceSolutions },
  } = service;
  return (
    <div className="service-item">
      <div dangerouslySetInnerHTML={{ __html: svg }} />
      <h3>{serviceName}</h3>
      <article>{description}</article>
      {serviceSolutions.length > 0 && (
        <>
          <img src={Arrow} alt="" />
          <ol>
            {serviceSolutions.map(({ id, solutionName }) => (
              <li key={id}>{solutionName}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
};

export default Service;
