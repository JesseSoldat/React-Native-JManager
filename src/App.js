import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';



class App extends Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App;
