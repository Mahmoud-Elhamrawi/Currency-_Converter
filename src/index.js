import React from 'react';
import  ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App/> , document.getElementById('myroot'))

const root = ReactDOM.createRoot(document.getElementById('myroot'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
);

reportWebVitals();
