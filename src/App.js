import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';



class App extends Component {
	componentWillMount() {
		var config = {
	    apiKey: "AIzaSyAw5uIZdlyPYjBuYoc8zRjbiv0-lxWANys",
	    authDomain: "playground-3f11f.firebaseapp.com",
	    databaseURL: "https://playground-3f11f.firebaseio.com",
	    projectId: "playground-3f11f",
	    storageBucket: "playground-3f11f.appspot.com",
	    messagingSenderId: "1016399993027"
	  };
	  firebase.initializeApp(config);
	}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App;
