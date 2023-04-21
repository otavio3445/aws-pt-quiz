import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Security from './routes/Security';
import Pricing from './routes/Pricing';
import Tech from './routes/Tech';
import Cloud from './routes/Cloud';
import Every from './routes/Every';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "security",
    element: <Security />
  },
  {
    path: "pricing",
    element: <Pricing />
  },
  {
    path: "tech",
    element: <Tech />
  },
  {
    path: "cloud",
    element: <Cloud />
  },
  {
    path: "every",
    element: <Every />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
