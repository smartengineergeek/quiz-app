import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Quiz from './containers/Quiz';
// import Test from './containers/Test'

const Routes = (props) => (
    <Switch>
        <Route path="/home"  component={Home} />
        <Route exact path="/"  component={Quiz} />
    </Switch>
)

export default Routes;