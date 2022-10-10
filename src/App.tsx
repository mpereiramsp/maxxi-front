import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';

function App() {
  return (
      <>
        <ToastContainer  pauseOnHover />
        <Routes />
      </>
    );
}

export default App;
