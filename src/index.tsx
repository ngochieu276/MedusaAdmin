import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/scss/index.scss';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { store } from './store/index';
import { Provider } from 'react-redux';
import ModalComponent from './components/modal/ModalComponent';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
      <ModalComponent key="app-modal" />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
