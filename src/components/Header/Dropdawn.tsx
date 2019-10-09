import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

import { IDropdawnMenu } from '../../Types/CommonTypes';
import { IDropdawnProps } from './HeaderTypes';

import './Dropdawn.scss';

const Dropdawn: React.FC<IDropdawnProps> = ({ children, className, isMenuOpen, openMenu, title }): JSX.Element => {
  const [isDropdawnOpen, openDropdawn] = useState<boolean>(false);
  const dropdawn = useRef(null);
  const dropdawnLink = useRef(null);

  const clickOutside = useCallback((e: MouseEvent) => {
    if (dropdawn && !dropdawn.current.contains(e.target) && !dropdawnLink.current.contains(e.target)) {
      openDropdawn(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', clickOutside);
  }, []);

  useEffect(
    () => () => {
      document.removeEventListener('click', clickOutside);
    },
    []
  );

  return (
    <li ref={dropdawnLink} className={className}>
      <span
        className={`dropdawn-title ${isDropdawnOpen ? 'dropdawn-title-open' : 'dropdawn-title-close'}`}
        onClick={(): void => openDropdawn(!isDropdawnOpen)}
      >
        {title}
      </span>
      <ul ref={dropdawn} className={`dropdawn-list ${isDropdawnOpen ? 'dropdawn-list-open' : 'dropdawn-list-close'}`}>
        {children.map(({ className: dropdawnItemClassName, link, title: dropdawnItemTitle }: IDropdawnMenu) => (
          <li key={link} className={dropdawnItemClassName}>
            <Link onClick={isMenuOpen ? (): void => openMenu() : (): void => {}} to={link}>
              {dropdawnItemTitle}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdawn;
