import GlobalStyle from './GlobalStyle';
import FontStyle from './FontStyle';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

const padding = {
  md: '1.5rem',
  lg: '2rem',
};

const fontSize = {
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};

const radius = {
  md: '11px',
};

export const commonStyle = {
  padding,
  fontSize,
  radius,
};

export const lightTheme = {
  mode: LIGHT_THEME,
  style: {
    ...commonStyle,
    fontColor: '#212529',
    backgroundColor: '#ffffff',
    primaryColor: {
      light: '#dbe4ff',
      basic: '#4263eb',
      dark: '#364fc7',
    },
  },
};

export const darkTheme = {
  mode: DARK_THEME,
  style: {
    ...commonStyle,
    fontColor: '#f8f9fa',
    backgroundColor: '#495057',
    primaryColor: {
      light: '#edf2ff',
      basic: '#748ffc',
      dark: '#4263eb',
    },
  },
};

export { GlobalStyle, FontStyle };
