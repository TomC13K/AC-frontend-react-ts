import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  h1Bold: React.CSSProperties;
}

const theme = createTheme({
  typography: {
    //this is the custom prop I want to add
    h1Bold: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '1.15em',
      color: '#999999',
      marginTop: '0.5em',
      marginBottom: '0.5em',
    },
  } as ExtendedTypographyOptions,
} as ThemeOptions);

const TextFieldDefault = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: '	#999999',
  },
  '& .MuiInputBase-root': {
    color: '	#DDDDDD',
  },
  '& label.Mui-focused': {
    color: '#DDDDDD',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#222831',
    },
    '&:hover fieldset': {
      borderColor: '#F05454',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F05454',
    },
  },
});

export { theme, TextFieldDefault };
