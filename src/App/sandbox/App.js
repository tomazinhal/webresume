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

class Profile extends Component {
    state = {
        handle: "",
        profile: ""
    }

    componentDidMount() {
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
        console.log("MOUNTED PROFILE")
    }

    render(){
        const state = this.state
        //console.log(state.profile)
        return (
            <div>
                <ProfileHeader handle={state.handle}/>
                <ProfileMain profile={state.profile}/>
            </div>
        )        
    }
}

class ProfileHeader extends Component {
    render(){
        const handle = this.props.handle;
        return (
            <ul>
                <p>Handle: <b>{handle}</b></p>
                <li><Link to={`/u/${handle}`} >Home</Link></li>
                <li><Link to={`/u/${handle}/resume`} >Resume</Link></li>
                <li><Link to={`/u/${handle}/contact`} >Contact</Link></li>
            </ul>
        )
    }
}

class ProfileMain extends Component {
    componentDidMount(){
        if(this.props.profile === undefined){

        }
    }
    render(){
        const profile = this.props.profile
        const resume = profile.resume
        const contact = profile.contact
        const personal = profile.personal
        //console.log(resume)
        return (
            <Switch>
                <Route path="/u/:handle/resume" render={profile => <ProfileResume resume={resume}/>} />
                <Route path="/u/:handle/contact" render={profile => <ProfileContact contact={contact}/>} />
                <Route path="/u/:handle" render={profile => <ProfileHome personal={personal}/>} />
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
    state = {
        resume: []
    }
    componentDidMount(){
        if (this.props.resume === undefined){
            const handle = this.props.match.params.handle
            fetch(`http://localhost:5000/u/${handle}/resume`)
            .then(response => response.json())
            .then(data => {
                const parsed = JSON.parse(data);
                this.setState({
                    resume: parsed
                });
            });
            console.log("MOUNTED RESUME")
        }
    }


    render(){
        const resume = this.props.resume || this.state.resume
        console.log(resume)
        const items = resume.map((item, index) => (
                <ResumeItem key={index} item={item} />
            )
        )
        return (
            <div>
                <h1>ProfileResume</h1>
                <ul>
                    {items}
                </ul>
            </div>
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