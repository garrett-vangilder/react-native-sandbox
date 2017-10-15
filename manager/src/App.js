import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBNbgyeMKwvDkeLTWJsDTSc7AbjzdFq4yQ',
      authDomain: 'manager-9f31a.firebaseapp.com',
      databaseURL: 'https://manager-9f31a.firebaseio.com',
      projectId: 'manager-9f31a',
      storageBucket: 'manager-9f31a.appspot.com',
      messagingSenderId: '594047614144'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
