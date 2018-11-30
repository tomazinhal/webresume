import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Resume from './containers/Resume';
import Contact from './containers/Contact';
import Header from './components/Header';
import _404 from './containers/NotFound';
import Profile from './containers/Profile';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path='/:handle' component={Profile} />
			</div>
		);
	}
	render2(){
		return (
			<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contact" component={Contact} />
				<Route path="/resume" component={Resume} />
				<Route component={_404} />
			</Switch>
			</div>
		)
	}
}

export default App;
	