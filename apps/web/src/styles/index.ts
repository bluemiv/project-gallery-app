import GlobalStyle from './GlobalStyle';
import FontStyle from './FontStyle';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

const padding = {
  md: '1.5rem',
  lg: '2rem',
};

export const commonStyle = {
  padding,
};

export const lightTheme = {
  mode: LIGHT_THEME,
  style: {
    ...commonStyle,
  },
};

export const darkTheme = {
  mode: DARK_THEME,
  style: {
    ...commonStyle,
  },
};

export { GlobalStyle, FontStyle };
