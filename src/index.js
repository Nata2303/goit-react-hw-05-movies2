import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies2">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
