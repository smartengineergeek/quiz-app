import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Quiz from './containers/Quiz';
import TotalScore from './components/TotalScore/TotalScore';

const Routes = () => (
    <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/quiz"  component={Quiz} />
        <Route path="/total-score" component={TotalScore} />
    </Switch>
)

export default Routes;