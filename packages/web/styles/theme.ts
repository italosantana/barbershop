import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
const defaultTheme = createTheme();

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      dark: '#222522',
      main: '#5C5A4E',
      light: '#E6EEDE',
    },
    secondary: {
      dark: '#ABB3A3',
      main: '#8F866E',
      light: '#09090A',
      contrastText: '#121214',
    },
    error: {
      main: '#F75A68',
    },
    background: {
      default: '#FBFBFD',
    },
  },
  typography: {
    subtitle1: {
      color: '',
    },
  },
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      mobile: 520,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
