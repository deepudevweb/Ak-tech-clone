import React from 'react'
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById("root")); root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
);
