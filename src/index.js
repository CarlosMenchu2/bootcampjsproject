import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { theme } from './utils/theme'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './routes/home-page/Home-page';
import { ProductCatalog } from './routes/product-catalog/Product-catalog';
import { ProductView } from './routes/product-view/Product-view';
import { OrderDetail } from './routes/order-detail/Order-detail';
import Dashboard from './routes/dashboard/Dashboard';
import Login from './routes/login/Login';
import Forgotpassword from './routes/forgotpassword/Forgotpassword';


ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
    
    </ThemeProvider> */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />}/>
            <Route path='order' element={<OrderDetail />}/>
            <Route path='product' element={<ProductCatalog />}/>
            <Route path='product/:id' element={<ProductView />}/>
            <Route path='admin' element={<Dashboard />}/>
            <Route path='login' element={<Login />}/>
            <Route path='forgotpass' element={<Forgotpassword />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
