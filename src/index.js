import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewComponent } from './viewComponent';
import { CartComponent } from './CartComponent';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact strict path="/" element={<App />} />
        <Route exact strict path="/view" element={<ViewComponent />} />
        <Route exact strict path="/cart" element={<CartComponent type="cart" />} />
        <Route exact strict path="/wishlist" element={<CartComponent type="wishlist" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
