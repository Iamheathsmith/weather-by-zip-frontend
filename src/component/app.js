import '../style/base/_reset.scss';
import '../style/main.scss';

import React from 'react';
import Nav from './nav/index';
import Content from './content';
import {Provider} from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';


const store = createStore();

export default class App extends React.Component {

  render() {
    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Nav />
              <Route exact path="/" component={Content}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
