import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const theme = {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
          <App />
          <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
