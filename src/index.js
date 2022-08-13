import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyle from 'styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from 'redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
