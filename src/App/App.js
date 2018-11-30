import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Resume from './containers/Resume';
import Contact from './containers/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
        <main className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/resume" component={Resume} />
				</Switch>
        </main>
			</div>
		);
	}
}

export default App;
	