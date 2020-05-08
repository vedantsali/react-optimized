import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/reducers/store';
import AppRouter from './common/AppRouter';

export default class App extends Component {
  render() {
    return (
      <AppRouter />
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);