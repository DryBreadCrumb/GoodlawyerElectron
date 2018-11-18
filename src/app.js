import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import thunkMiddleware from 'redux-thunk'
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import userReducer from './reducers/userReducer';

const store = createStore(userReducer,compose(applyMiddleware(thunkMiddleware)));

const jsx = (
    
        <div id="appMain">
            <Provider store={store}>
                <HashRouter>
                    <AppRouter />
                </HashRouter>
            </Provider>
        </div>
    
);

const appRoot = document.getElementById('app');
document.getElementById('no-webpack').style.display = 'none'; // hide the webpack error if webpack is running
ReactDOM.render(jsx,appRoot);
