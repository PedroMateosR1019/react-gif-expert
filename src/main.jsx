import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp.jsx';
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  //Solo se utiliza en modo desarrollo 
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
