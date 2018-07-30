import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'

library.add(faTv)
//const greeting = React.createElement('h1',{}, 'Hello World');

// = function() {...}
// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }

//const greeting2 = <h1>Today Day: {getCurrentDate()}</h1>

//ReactDOM.render(greeting2, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
