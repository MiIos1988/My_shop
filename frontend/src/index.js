import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import userSlicer from './redux/userSlicer';
import loaderSlicer from './redux/loaderSlicer';
import cartSlicer from './redux/cartSlicer';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const route = createBrowserRouter(router);

const store = configureStore({
  reducer: { userSlicer, loaderSlicer, cartSlicer },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={route} />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
