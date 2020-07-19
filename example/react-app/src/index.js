import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

import './index.css';

import App from './pages/App';
import About from './pages/About';

import * as serviceWorker from './serviceWorker';

console.log(createElement);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Router>
    <div>
      <ul className="nav">
        <li><Link to="/">App</Link></li>
        <li><Link to="/About">About</Link></li>
        </ul>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/About" component={About} />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
