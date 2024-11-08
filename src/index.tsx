import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
