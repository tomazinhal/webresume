import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './features/Home/pages/Home/Home';
import Resume from './features/Resume/pages/Resume/Resume';
import Contact from './features/Contact/pages/Contact/Contact';
import Header from './features/Common/components/Header/Header';
import _404 from './containers/NotFound';
import Profile from './containers/Profile';

import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<main className="container">
					<Switch>
						<Route exact path="/u/:handle/" component={Home} />
						<Route path="/u/:handle/contact" component={Contact} />
						<Route path="/u/:handle/resume" component={Resume} />
						<Route path="/u/:handle" component={Profile} />
						<Route exact path="/" component={Home} />
						<Route component={_404} />
					</Switch>
				</main>
			</div>
		);
	}
	render2(){
		return (
			<div>
			<Header/>
			<Switch>
				<Route path="/u/:handle" component={Profile} />
			</Switch>
			</div>
		)
	}
}

export default App;
	