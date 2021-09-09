import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// const getCurrentDate = () => {
//   const date = new Date()
//   return date.toDateString()
// }
// const greeting = <h1>Hello there. Current date: {getCurrentDate()} </h1>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


reportWebVitals();