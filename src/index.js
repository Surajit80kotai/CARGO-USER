import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='*' element={<App />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <ToastContainer style={{ "fontSize": "15px" }} transition={Bounce} position="top-right" />
  </Router>
);
reportWebVitals();
