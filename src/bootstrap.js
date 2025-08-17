import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Home from './components/home';
import Results from './components/results';

// Crear store Redux
const store = createStore(reducers);

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/results' component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector('.app-wrapper')
  );
}

document.addEventListener('DOMContentLoaded', main);