import React from 'react';
import ReactDOM from 'react-dom';
import MemePage from './src/MemePage';
import Header from './src/Header'
import './MemePageStyle.css'
import reportWebVitals from './src/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MemePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();