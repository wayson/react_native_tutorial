import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyALz4VD-VCayd9unPtLi1vZpOXnNAfskOE',
      authDomain: 'authentication-bc79b.firebaseapp.com',
      databaseURL: 'https://authentication-bc79b.firebaseio.com',
      projectId: 'authentication-bc79b',
      storageBucket: 'authentication-bc79b.appspot.com',
      messagingSenderId: '33208233352'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Button onPress={()=>firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>
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