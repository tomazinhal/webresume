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

class Header extends Component{
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={`/`} >Home</Link></li>
                </ul>
            </div>
        )
    }
}

const ProfileContext = React.createContext("")

class Profile extends Component {
    state = {
        handle: "",
        profile: ""
    }

    componentDidMount() {
        console.log(this.props)
        const handle = this.props.match.params.handle
        fetch(`http://localhost:5000/u/${handle}`)
        .then(response => response.json())
        .then(data => {
            const parsed = JSON.parse(data);
            this.setState({
                handle: handle,
                profile: parsed
            });
        });
        console.log("COMPONENTDIDMOUNT PROFILE")
    }

    render(){
        const state = this.state
        console.log(state.profile)
        return (
            <div>
                <ProfileContext.Provider value={state}>
                    <ProfileHeader/>
                    <ProfileMain/>    
                </ProfileContext.Provider>
            </div>
        )        
    }
}
Profile.contextType = ProfileContext;


class ProfileHeader extends Component {
    render(){
        //const handle = this.props.handle;
        return (
            <ProfileContext.Consumer>
                {(context) => {
                    const handle = context.handle;
                    return (
                        <ul>    
                            <p>Handle: <b>{handle}</b></p>
                            <li><Link to={`/u/${handle}`} >Home</Link></li>
                            <li><Link to={`/u/${handle}/resume`} >Resume</Link></li>
                            <li><Link to={`/u/${handle}/contact`} >Contact</Link></li>
                        </ul>
                    )}
                }
            </ProfileContext.Consumer>
        )
    }
}

class ProfileMain extends Component {
    render(){
        return(
            <Switch>
                <Route path="/u/:handle/resume" component={ProfileResume} />
                <Route path="/u/:handle/contact" component={ProfileContact} />
                <Route path="/u/:handle" component={ProfileHome} />
            </Switch>
        )
    }
}

class ProfileHome extends Component{
        render(){
        return (
            <ProfileContext.Consumer>
                {(context) => {
                    console.log("profilehome:")
                    console.log(context)
                    const personal = context.profile.personal
                    return (
                        <div>
                            <h2>Name: {personal.name.first} {personal.name.last}</h2>
                            <p>{personal.description}</p>
                        </div>
                    )
                }}
            </ProfileContext.Consumer>
        )
    }
}

class ProfileResume extends Component{
    render(){
        return (
            <ProfileContext.Consumer>
                {(context) => {
                    console.log("profileresume:")
                    console.log(context)
                    const resume = context.profile.resume
                    return (
                        <div>
                            {resume.map((item, index) => (
                                <ResumeItem key={index} item={item} />
                            ))}
                        </div>
                    )
                }}
            </ProfileContext.Consumer>
        )
    }
}

class ResumeItem extends Component{
    render(){
        console.log(this.props)
        return (
            <ul>
                <li><h2>{this.props.item.type}</h2></li>
                <li><h3>{this.props.item.subject || this.props.item.title}</h3></li>
                <li><p>{this.props.item.description}</p></li>
                <ul>
                    {this.props.item.techonologies.map((tech) => ( //FIX TYPO ON DB OF TECH >O< NOLOGIE
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </ul>
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