import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Button, Spinner } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCJmIDodikOdK8bQaHFyLmAsv571RuwLZA',
        authDomain: 'world-traveler-1492270365374.firebaseapp.com',
        databaseURL: 'https://world-traveler-1492270365374.firebaseio.com',
        projectId: 'world-traveler-1492270365374',
        storageBucket: 'world-traveler-1492270365374.appspot.com',
        messagingSenderId: '1075521962150'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
        );
      case false:
        return <LoginForm />;
      default: 
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
