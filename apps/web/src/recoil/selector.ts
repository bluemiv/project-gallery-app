import { selector } from 'recoil';
import { themeState } from './atom';
import { darkTheme, LIGHT_THEME, lightTheme } from '../styles';

export const themeSelector = selector({
  key: 'themeSelector',
  get: ({ get }) => {
    const theme = get(themeState);
    return theme === LIGHT_THEME ? lightTheme : darkTheme;
  },
});
