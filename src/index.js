import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const repoName = process.env.PUBLIC_URL.split('/').pop();
root.render(
  <React.StrictMode>
       <BrowserRouter basename={repoName}>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

