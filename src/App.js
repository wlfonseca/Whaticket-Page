import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Page from './Page';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ACC1',
      contrastText: '#FFFFFF',
      darker: '#053e85',
    },
    secondary: {
      main: '#121212',
      darker: '#053e85',
    },
  },
});

function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </div>
  );
}

export default App;
