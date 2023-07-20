// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

function GlobalStyle() {
    return (
        <MUIGlobalStyles
            styles={{
                html: {
                    margin: 0,
                    padding: 0,
                },
                body: {
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: '#f9f9f9'
                }
            }}
        />
    )
}

export default GlobalStyle