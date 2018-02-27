import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from  './Router';

class App extends Component {
    componentWillMount() {
        const config = {
                apiKey: "AIzaSyAqxoaKr_IqW-nIFHYm-vFEdylsh7P0YNQ",
                authDomain: "manager-d507c.firebaseapp.com",
                databaseURL: "https://manager-d507c.firebaseio.com",
                projectId: "manager-d507c",
                storageBucket: "",
                messagingSenderId: "344747977555"
            };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;