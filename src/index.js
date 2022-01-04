import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NavbarComponent } from './components/navbar/navbar-component';
import { HomePageComponent } from './components/home-page-component/home-page-component';

import { theme } from './utils/theme'
import { ThemeProvider } from '@mui/material/styles';
import { ProductViewComponent } from './components/product-view/product-view-component';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavbarComponent />
      {/* <HomePageComponent /> */}
      <ProductViewComponent />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
