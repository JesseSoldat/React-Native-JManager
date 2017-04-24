import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// import reducers from './reducers';



class App extends Component {
  render() {
    return (
      <Text>Hello</Text>
    )
  }
}

export default App;
