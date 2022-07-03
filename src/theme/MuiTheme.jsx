import { createTheme } from '@mui/material'

export const MuiTheme = createTheme({
  palette: {
    text: {
      primary: '#4a4a4a',
    },
    primary: {
      main: '#358f78',
    },
    secondary: {
      main: '#4a4a4a',
    },
    success: {
      main: '#e2e2e2',
    },
    error: {
      main: '#f02f1e',
    },
    info: {
      main: '#fff',
    },
    background: {
      default: '#fafafa',
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
        sx: {
          boxShadow: 8,
          background: '#e2e2e2',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        sx: {
          boxShadow: 8,
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        sx: {
          width: 250,
        },
      },
    },
    MuiTableRow: {
      indicator: {
        backgroundColor: '#358f78',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
        sx: { pb: 1 },
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          whiteSpace: 'nowrap',
          borderRadius: 10,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        //propsebi aq
        sx: {
          //stilebi aq
        },
      },
      styleOverrides: {
        root: {
          //stilebi aq
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          '&[disabled]': {
            color: 'inherit',
            cursor: 'inherit',
            '&:hover': {
              textDecoration: 'none',
            },
          },
        },
        button: {
          font: 'inherit',
          lineHeight: 'inherit',
          verticalAlign: 'inherit',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: { fontFamily: 'BOG, sans-serif' },
    },
  },
  typography: {
    fontFamily: 'BOG, sans-serif',
  },
})
