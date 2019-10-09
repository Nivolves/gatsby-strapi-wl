import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

import context from '../context';

import './LanguageSelector.scss';

const LanguageSelector: React.FC = (): JSX.Element => {
  const { language: cult, languages, setLanguage } = useContext(context);
  const [isLanguageSelectorOpen, openLanguageSelector] = useState<boolean>(false);

  const lanuageSelector = useRef(null);

  const clickOutside = useCallback((e: MouseEvent) => {
    if (lanuageSelector && !lanuageSelector.current.contains(e.target)) {
      openLanguageSelector(false);
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

  const setLanguagePath = useCallback((language: string): string => {
    if (typeof window !== 'undefined') {
      let path = window.location.pathname;
      const pageLang = path.split('/');
      languages.forEach((lang: string): void => {
        if (lang === pageLang[1]) {
          path = path.replace(`/${pageLang[1]}`, '');
        }
      }, path);
      return `/${language}${path}`;
    }
    return '/';
  }, []);

  return (
    <div
      onClick={(): void => openLanguageSelector(!isLanguageSelectorOpen)}
      className={`language-selector ${isLanguageSelectorOpen ? 'language-selector-open' : 'language-selector-close'}`}
      ref={lanuageSelector}
    >
      <span>{cult}</span>
      <div className={`language-list ${isLanguageSelectorOpen ? 'language-list-open' : 'language-list-close'}`}>
        {languages.map((language: string) => (
          <Link key={language} onClick={(): void => setLanguage(language)} to={setLanguagePath(language)}>
            {language}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
