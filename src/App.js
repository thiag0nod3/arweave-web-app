import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ExampleComponent from './components/ExampleComponent';
import Routes from './routes';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ExampleComponent} />
                {Routes()}
            </Switch>
        </Router>
    );
}

export default App;