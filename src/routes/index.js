import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ExampleComponent from '../components/ExampleComponent';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={ExampleComponent} />
            {/* Add more routes here as needed */}
        </Switch>
    );
};

export default Routes;