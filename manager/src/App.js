import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDUmr9eMjplFSmyKDVR_Bakjdyufw7h9a0",
      authDomain: "manager-edef2.firebaseapp.com",
      databaseURL: "https://manager-edef2.firebaseio.com",
      projectId: "manager-edef2",
      storageBucket: "manager-edef2.appspot.com",
      messagingSenderId: "608195249909"
    };

    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />  
      </Provider>
    );
  }
}

export default App;