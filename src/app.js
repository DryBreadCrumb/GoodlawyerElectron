import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

import './styles/styles.scss';


var test = "1"

const jsx = (
    <div id="appMain">
    <HashRouter>
        <AppRouter />
    </HashRouter>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx,appRoot);
