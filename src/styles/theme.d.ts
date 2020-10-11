import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    primary: string;
    secondary: string;
    text: string;
    ternary: string;
    quarternary: string;
    googleButton: string;
    facebookButton: string;
  }
}
