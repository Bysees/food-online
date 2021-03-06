import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux'
import App from './App';
import MainRouter from './components/common/MainRouter';
import AuthProvider from './components/AuthProvider';

ReactDOM.render(
  <Provider store={store}>
    <MainRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MainRouter>
  </Provider>,
  document.getElementById('root')
);