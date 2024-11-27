import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { App } from './app/App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const basename = process.env.NODE_ENV === 'production' ? '/DayTrack-/' : '/';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter basename={basename}>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
