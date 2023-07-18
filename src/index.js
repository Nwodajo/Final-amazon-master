import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  StateProvider  from './Components/StateProvider/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider >
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </StateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
