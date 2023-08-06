import Router from './routes'
import { BrowserRouter } from 'react-router-dom';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import GlobalStyle from './theme/GlobalStyle';
import { createTheme, ThemeProvider } from '@mui/material'
import { typography } from './theme/typography';
import './app.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

const queryClient = new QueryClient()

function App() {

  const theme = createTheme({ typography })

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <SnackbarProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </SnackbarProvider>
      </ReduxProvider>
    </ThemeProvider>
  )
}

export default App
