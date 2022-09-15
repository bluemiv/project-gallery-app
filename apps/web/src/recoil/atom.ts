import { atom } from 'recoil';
import { DARK_THEME, LIGHT_THEME } from '../styles';

const initTheme = localStorage.getItem('theme');
export const themeState = atom({
  key: 'theme',
  default: initTheme === DARK_THEME ? DARK_THEME : LIGHT_THEME,
});

export const imageListState = atom({
  key: 'imageList',
  default: [],
} as { key: string; default: any[] });
