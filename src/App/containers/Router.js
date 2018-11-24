import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';

let Router = (props) => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
    </Switch>
)


export default Router;