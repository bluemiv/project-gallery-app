import 'styled-components';

declare module 'styled-components' {
  import { commonStyle, darkTheme, lightTheme } from './styles';
  export type ThemeType = typeof commonStyle & (typeof lightTheme | typeof darkTheme);
}
