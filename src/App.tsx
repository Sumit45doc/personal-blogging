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

const queryClient = new QueryClient()

function App() {

  const theme = createTheme({ typography })

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
