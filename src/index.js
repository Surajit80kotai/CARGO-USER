import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-input-2/lib/style.css'
import Signup from './pages/Signup';
import Forgetpassword from './pages/Forgetpassword';
import { Provider } from 'react-redux';
import { Store } from './services/store/Store'
import SuccessPage from './pages/SuccessPage';
import ProtectedRouteTwo from './routes/protected/ProtectedRouteTwo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route path='*' element={<App />} />
        <Route element={<ProtectedRouteTwo />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget-password' element={<Forgetpassword />} />
        </Route>
        <Route path='/successpage' element={<SuccessPage />} />
      </Routes>
      <ToastContainer style={{ "fontSize": "15px" }} transition={Bounce} position="top-right" />
    </Router>
  </Provider>
);
reportWebVitals();
