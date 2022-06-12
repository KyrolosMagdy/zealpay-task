import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

// this url solves your issues: https://stackoverflow.com/questions/70906950/typescript-type-error-when-adding-custom-new-property-tab-inside-typography
declare module '@mui/material/styles/createTypography' {
  interface Typography {
    tab: TypographyStyleOptions | undefined;
  }

  interface TypographyOptions {
    tab: TypographyStyleOptions | undefined;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    silver: string;
    green: string;
    openBlue: string;
    facebookBlue: string;
  }
}

export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ffffff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#C0C0C0',
    },
    common: {
      silver: '#C0C0C0',
      green: '#2F8E89',
      openBlue: '#D5E9F6',
      facebookBlue: '#1877f2',
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: '1rem ',
    },
    button: {
      textDecoration: 'none',
    },
  },
});
