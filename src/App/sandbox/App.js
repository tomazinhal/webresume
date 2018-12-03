import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class Sandbox extends Component {
  render(){
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/u/:handle" component={Profile} />
            </Switch>
        )
    }
}

class Main extends Component {
    render(){
        return (
            <div>
                <Header />
                <h1>THIS IS MAIN BODY</h1>
            </div>
        )
    }
}


const Header = () => (
    <div>
        <ul>
            <li><Link to={`/`} />Home</li>
        </ul>
    </div>
);

class Profile extends Component {
    render(){
        return (
            <div>
                <ProfileHeader/>
                <ProfileMain />
            </div>
        )        
    }
}

class ProfileHeader extends Component {
    render(){
        console.log(this.props)
        const handle = this.props;
        return (
            <ul>
                <li><Link to={`/u/${handle}`} >Home</Link></li>
                <li><Link to={`/u/${handle}/resume`} >Resume</Link></li>
                <li><Link to={`/u/${handle}/contact`} >Contact</Link></li>
            </ul>
        )
    }
}

class ProfileMain extends Component {   
    state = {
        handle: ""
    }
    render(){
        const handle = this.state.handle
        return (
            <Switch>
                <Route path={`/u/:handle`} component={ProfileHome}/>
                <Route path={`/u/:handle/resume`} component={ProfileResume}/>
                <Route path={`/u/:handle/contact`} component={ProfileContact}/>
            </Switch>
        )
    }
}

class ProfileHome extends Component{
    render(){
        return (
            <div>
                <h1>PROFILE HOME</h1>
            </div>
        )
    }
}

class ProfileResume extends Component{
    render(){
        return (
            <div>
                <h1>PROFILE RESUME</h1>
            </div>
        )
    }
}
class ProfileContact extends Component{
    render(){
        return (
            <div>
                <h1>PROFILE CONTACT</h1>
            </div>
        )
    }
}

export default Sandbox;