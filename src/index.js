import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import { newStore } from './stores/store';

import Today from './pages/today/Today';
import Later from './pages/later/Later';
import  Finished from './pages/finished/Finished';
import Layout from './containers/layout/Layout';
import './index.css';

const history = createBrowserHistory();
const store = newStore();


ReactDOM.render(
 <Provider store={store}>
  <Router history={history}>
    <Layout>

        <Redirect exact from='/' to='/today' />
        <Route exact path='/today' component={Today} />
        <Route exact path='/later' component={Later} />
        <Route exact path='/finished' component={Finished} />

    </Layout>
  </Router>
 </Provider>,
  document.getElementById('root')
);
