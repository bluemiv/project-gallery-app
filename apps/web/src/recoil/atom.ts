import { atom } from 'recoil';
import { DARK_THEME, LIGHT_THEME } from '../styles';

const initTheme = localStorage.getItem('theme');
export const themeState = atom({
  key: 'theme',
  default: initTheme === DARK_THEME ? DARK_THEME : LIGHT_THEME,
});
