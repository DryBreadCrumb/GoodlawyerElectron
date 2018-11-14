import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import LandingPage from '../components/LandingPage';
import test from '../components/test';


class AppRouter extends React.Component{
    constructor(props){
      super(props);
    }
  
    render(){
      return (
            <div>
                <Switch>
                    <Route path="/" component={LandingPage} exact={true} />
                    <Route path="/test" component={test} exact={true} />

                </Switch>
            </div>
      )
    }

}

export {AppRouter as default};