import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

    componentWillMount(){
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
        return(
            <Provider store= { createStore(reducers)}>
                <View>
                    <Text>Hola ArkusNexus</Text>
                </View>
            </Provider>
        )
    }
}

export default App;