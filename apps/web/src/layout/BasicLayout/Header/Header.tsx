import React from 'react';
import { StyledHeader } from './StyledHeader';
import type { HeaderProps } from './types';
import { useRecoilState } from 'recoil';
import { themeState } from '../../../recoil/atom';
import { DARK_THEME, LIGHT_THEME } from '../../../styles';
import { BiMoon, BiSun } from 'react-icons/bi';

const Header = ({ title }: HeaderProps) => {
  const [themeMode, setThemeMode] = useRecoilState(themeState);

  const onClickThemeButton = () => {
    const nextThemeMode = themeMode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setThemeMode(nextThemeMode);
    localStorage.setItem('theme', nextThemeMode);
  };

  return (
    <StyledHeader>
      <a className="title" href="/">
        {title}
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/setting">setting</a>
          </li>
        </ul>
      </nav>
      <button className="theme-button" onClick={onClickThemeButton}>
        {themeMode === LIGHT_THEME ? <BiMoon /> : <BiSun />}
      </button>
    </StyledHeader>
  );
};

export default Header;
