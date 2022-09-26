import FontStyle from './FontStyle';
import GlobalStyle from './GlobalStyle';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

const padding = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
};

const fontSize = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};

const radius = {
  sm: '8px',
  md: '11px',
};

export const commonStyle = {
  padding,
  fontSize,
  radius,
  blackColor: '#212529',
  transition: (style: string = 'all') => `${style} 0.15s ease-in-out`,
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
    warningColor: {
      light: '#fff4e6',
      basic: '#fd7e14',
    },
    boxShadow: '0 3px 24px 3px #f1f3f5',
  },
};

export const darkTheme = {
  mode: DARK_THEME,
  style: {
    ...commonStyle,
    fontColor: '#f8f9fa',
    backgroundColor: '#495057',
    primaryColor: {
      light: '#dbe4ff',
      basic: '#4263eb',
      dark: '#364fc7',
    },
    warningColor: {
      light: '#fff4e6',
      basic: '#fd7e14',
    },
    boxShadow: '0 3px 24px 3px #212529',
  },
};

export { GlobalStyle, FontStyle };
