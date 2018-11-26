import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import Header from '../components/Header';

let Router = (props) => (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
        </Switch>
    </div>
)


export default Router;