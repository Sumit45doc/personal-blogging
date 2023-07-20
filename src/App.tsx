import Router from './routes'
import { BrowserRouter } from 'react-router-dom';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import GlobalStyle from './theme/GlobalStyle';
import { createTheme, ThemeProvider } from '@mui/material'
import { typography } from './theme/typography';

function App() {

  const theme = createTheme({typography})

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
