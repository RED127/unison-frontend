import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import theme from './themes';
import { persister, store } from 'store';
import Snackbar from 'components/Snackbar';
import 'assets/scss/style.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <BrowserRouter basename="/">
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                    <Snackbar />
                </ThemeProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
