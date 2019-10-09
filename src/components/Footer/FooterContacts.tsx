import React, { useContext, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import context from '../context';

import { IAddress, IContacts, IContactsData, IPhone } from '../../Types/CommonTypes';

import './FooterContacts.scss';

const CONTACTS_QUERY = graphql`
  query {
    contacts: allStrapiContacts {
      nodes {
        addresses {
          address
        }
        language {
          language
        }
        phones {
          phone
        }
        title
      }
    }
  }
`;

const FooterContacts: React.FC = (): JSX.Element => {
  const [isDropdawnOpen, openDropdawn] = useState<boolean>(false);
  const { language: cult } = useContext(context);
  const data: IContactsData = useStaticQuery(CONTACTS_QUERY);

  const {
    contacts: { nodes },
  } = data;

  const contacts: IContacts[] = nodes.filter(({ language: { language } }: IContacts): boolean => language === cult);

  const { addresses, phones, title } = contacts[0];

  return (
    <div className="footer-contacts">
      <div className="footer-contacts-title" onClick={(): void => openDropdawn(!isDropdawnOpen)}>
        {title}
      </div>
      <ul className={`footer-contacts-list ${isDropdawnOpen ? 'footer-contacts-list-open' : 'footer-contacts-list-close'}`}>
        {phones.map(
          ({ phone }: IPhone): JSX.Element => (
            <li className="footer-contacts-phone-item" key={phone}>
              <a href={`tel: ${phone}`}>{phone}</a>
            </li>
          )
        )}
        {addresses.map(
          ({ address }: IAddress): JSX.Element => (
            <li className="footer-contacts-address-item" key={address}>
              {address}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterContacts;
