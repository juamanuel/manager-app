import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyCT3A9apWA34DlYXV--JH8I10BqKl7gXXQ',
            authDomain: 'manager-2019-78760.firebaseapp.com',
            databaseURL: 'https://manager-2019-78760.firebaseio.com',
            projectId: 'manager-2019-78760',
            storageBucket: '',
            messagingSenderId: '820420477506',
            appId: '1:820420477506:web:b8e7c1f079e5a944'
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store= {store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
